import { CreateUserDTO } from "../dto/create-user.dto";

export abstract class UserClient {
    abstract createUser(createUserDTO: CreateUserDTO): Promise<any>
}