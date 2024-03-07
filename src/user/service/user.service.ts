import { CreateUserDTO } from "../dto/CreateUser.dto";
import { UpdateUserDTO } from "../dto/UpdateUser.dto";

export abstract class UserService {
    abstract createUser(createUserDTO: CreateUserDTO): Promise<CreateUserDTO>

    abstract updateUser(updateUser: UpdateUserDTO): Promise<any>

    abstract getUserById(id: string): Promise<any>
}