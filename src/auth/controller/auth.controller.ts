import { Body, Controller, Get, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthServiceImpl } from '../service/auth-impl.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authServiceImpl: AuthServiceImpl) {}

  @Post('login')
  async signIn(
    @Body() body,
    @Res() res: Response): Promise<any> {
    //   const user = await this.authServiceImpl.createUser(createUserDTO);
    //   return res.status(HttpStatus.CREATED).json({ message: 'Usuário criado com sucesso!', user });
    return res.status(222).send()
  }
}
