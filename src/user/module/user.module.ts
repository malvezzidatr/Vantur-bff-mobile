import { Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { UserServiceImpl } from '../service/user-impl.service';
import { UserClientImpl } from '../client/user-impl.client';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [UserController],
  providers: [
    UserServiceImpl,
    UserClientImpl,
  ],
})
export class UserModule {}
