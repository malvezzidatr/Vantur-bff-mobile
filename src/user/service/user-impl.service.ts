import { CreateUserDTO } from '../dto/CreateUser.dto';
import { UserClientImpl } from '../client/user-impl.client';
import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDTO } from '../dto/UpdateUser.dto';

@Injectable()
export class UserServiceImpl implements UserService {
  constructor(private readonly userClientImpl: UserClientImpl) {}

  async getUserById(id: string): Promise<any> {
    return await this.userClientImpl.getUserById(id);
  }

  async updateUser(updateUser: UpdateUserDTO): Promise<any> {
    return;
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<CreateUserDTO> {
    return await this.userClientImpl.createUser(createUserDTO);
  }
}
