import { CreateUserDTO } from "../dto/CreateUser.dto";

export abstract class UserClient {
    abstract createUser(createUserDTO: CreateUserDTO): Promise<CreateUserDTO>

    abstract getUserById(id: string): Promise<any>
}