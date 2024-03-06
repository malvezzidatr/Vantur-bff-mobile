import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDTO } from '../dto/create-user.dto';

@Injectable()
export class UserServiceImpl implements UserService {
  private readonly userClient: ClientProxy;

  constructor() {
    this.userClient = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 3002,
      },
    });
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<CreateUserDTO> {
    try {
      return await this.userClient.send('create-user', createUserDTO).toPromise();
    } catch (error) {
      throw new HttpException('Falha ao criar usuário', HttpStatus.BAD_REQUEST);
    }
  }
}
