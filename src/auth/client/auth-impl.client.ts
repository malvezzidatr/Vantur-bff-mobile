import { AuthClient } from "./auth.client";

export class AuthClientImpl implements AuthClient {
    signIn(email: string, password: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}