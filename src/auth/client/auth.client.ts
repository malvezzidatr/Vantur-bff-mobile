export abstract class AuthClient {
    abstract signIn(email: string, password: string): Promise<any>;
}