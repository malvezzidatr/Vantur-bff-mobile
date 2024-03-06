import { Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { UserServiceImpl } from '../service/user-impl.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserServiceImpl],
})
export class UserModule {}
