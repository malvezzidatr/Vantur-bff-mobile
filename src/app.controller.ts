import { Body, Controller, Get, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/user/create')
  async createUser(@Body() data: any, @Res() response: Response): Promise<any> {
    try {
      await this.appService.createUser(data);
      return response.status(HttpStatus.NO_CONTENT).send();
    } catch (err) {
      throw new HttpException('Falha ao criar', HttpStatus.BAD_REQUEST);
    }
  }
}
