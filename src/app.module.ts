import { Module } from '@nestjs/common';
import { UserServiceImpl } from './user/service/user-impl.service';
import { UserController } from './user/controller/user.controller';
import { UserModule } from './user/module/user.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { APP_FILTER } from '@nestjs/core';
import { BffExceptionFilter } from './filter/bffException.filter';
import { AuthModule } from './auth/module/auth.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    HttpModule,
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [{provide: APP_FILTER, useClass: BffExceptionFilter}],
})

export class AppModule {}
