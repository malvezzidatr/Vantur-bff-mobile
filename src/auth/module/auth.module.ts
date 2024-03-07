import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthController } from '../controller/auth.controller';
import { AuthServiceImpl } from '../service/auth-impl.service';
import { AuthClientImpl } from '../client/auth-impl.client';

@Module({
  imports: [HttpModule],
  controllers: [AuthController],
  providers: [
    AuthServiceImpl,
    AuthClientImpl,
  ],
})
export class AuthModule {}
