import { HttpService } from "@nestjs/axios";
import { CreateUserDTO } from "../dto/create-user.dto";
import { UserClient } from "./user.client";
import { catchError, firstValueFrom, map } from "rxjs";
import { HttpException, HttpStatus, Injectable, UseFilters } from "@nestjs/common";
import { BffException } from "src/exceptions/BffException.exception";
import { BffExceptionFilter } from "src/filter/bffException.filter";

@Injectable()
@UseFilters(new BffExceptionFilter())
export class UserClientImpl implements UserClient {

  constructor(private readonly httpService: HttpService) {
    this.httpService = httpService;
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<any> {
    return firstValueFrom(
      this.httpService.post('http://localhost:3002/user/create', createUserDTO)
        .pipe(map(res => {
          return res.data
        }),
        catchError(error => {
          throw this.httpError('createUser', error);
        })));
  }

  private httpError(method: string, error: any) {
    const { response: { status, data } } = error;
    const message = data.message !== undefined ? data.message : data;

    return new BffException(status, message, data.details);
  }
}