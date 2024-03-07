import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthClientImpl } from '../client/auth-impl.client';

@Injectable()
export class AuthServiceImpl implements AuthService {
  constructor(private readonly authClientImpl: AuthClientImpl) {}

    signIn(email: string, password: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
}
