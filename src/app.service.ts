import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { Observable, catchError, defaultIfEmpty, firstValueFrom, last, lastValueFrom, of } from 'rxjs';

@Injectable()
export class AppService {
  private readonly userClient: ClientProxy;

  constructor() {
    this.userClient = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 3002,
      },
    });
  }

  async createUser(body): Promise<any> {
    try {
      const result = await this.userClient.send('create-user', body).toPromise();
      return result;
    } catch (error) {
      console.error('Error occurred in createUser:', error);
      throw new HttpException('Teste', HttpStatus.BAD_REQUEST);
    }
  }
}
