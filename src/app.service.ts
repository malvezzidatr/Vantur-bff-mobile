import { Injectable } from '@nestjs/common';
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

  async createUser(body): Promise<Observable<any>> {
    try {
      return await lastValueFrom(this.userClient.send('create-user', body).pipe(
        catchError(err => {
          console.error('Erro ao chamar microserviço', err);
          return of(null);
        }),
        defaultIfEmpty(null)
      ));
    } catch (err) {
      console.error(err);
    }
  }
}
