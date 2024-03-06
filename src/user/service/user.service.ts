import { CreateUserDTO } from "../dto/create-user.dto";

export abstract class UserService {
    abstract createUser(createUserDTO: CreateUserDTO): Promise<any>
}