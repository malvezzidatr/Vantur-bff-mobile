import { Module } from '@nestjs/common';
import { UserServiceImpl } from './user/service/user-impl.service';
import { UserController } from './user/controller/user.controller';
import { UserModule } from './user/module/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    ClientsModule.register([
      { name: 'USER_SERVICE', transport: Transport.TCP },
    ]),
    ConfigModule.forRoot()
  ],
  controllers: [UserController],
  providers: [UserServiceImpl],
})

export class AppModule {}
