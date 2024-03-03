import { Inject, Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  private readonly authClient: ClientProxy;

  constructor() {
    this.authClient = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 3002, // Porta do microserviço
      },
    });
  }

  callService(
    name: string,
    email: string,
  ): Observable<{ name: string; email: string }> {
    return this.authClient.send('auth', { name, email });
  }
}
