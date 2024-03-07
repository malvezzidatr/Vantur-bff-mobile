import { Body, Controller, Get, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserServiceImpl } from '../service/user-impl.service';
import { CreateUserDTO } from '../dto/create-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userServiceImpl: UserServiceImpl) {}

  @Post('/user/create')
  async createUser(
    @Body() createUserDTO: CreateUserDTO,
    @Res() res: Response): Promise<any> {
      const user: Partial<CreateUserDTO> = await this.userServiceImpl.createUser(createUserDTO);
      return res.status(HttpStatus.CREATED).json({message: 'Usuário criado com sucesso!', user});
  }
}
