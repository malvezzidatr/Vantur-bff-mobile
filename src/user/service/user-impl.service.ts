import { UserService } from './user.service';
import { CreateUserDTO } from '../dto/create-user.dto';
import { UserClientImpl } from '../client/user-impl.client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserServiceImpl implements UserService {
  constructor(private readonly userClientImpl: UserClientImpl) {}

  async createUser(createUserDTO: CreateUserDTO): Promise<any> {
    return await this.userClientImpl.createUser(createUserDTO);
  }
}
