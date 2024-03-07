import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserServiceImpl } from '../service/user-impl.service';
import { CreateUserDTO } from '../dto/CreateUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userServiceImpl: UserServiceImpl) {}

  @Post('create')
  async createUser(
    @Body() createUserDTO: CreateUserDTO,
    @Res() res: Response): Promise<any> {
      const user: CreateUserDTO = await this.userServiceImpl.createUser(createUserDTO);
      return res.status(HttpStatus.CREATED).json({ message: 'Usuário criado com sucesso!', user });
  }

  @Get(':id/id')
  async getUserById(
    @Param('id') id: string,
    @Res() res: Response
  ) {
    const user = await this.userServiceImpl.getUserById(id);
    return res.status(200).json(user);
  }
}
