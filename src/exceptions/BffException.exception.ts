export class BffException extends Error {
    private status: number;
    private details: any;

    constructor(status: number, message: any, details?: any) {
        super(message);
        this.status = status;
        this.message = message;
    }

    public getStatus(): number {
        return this.status;
    }

    public getMessage(): any {
        return this.message;
    }

    public getDetails(): any {
        return this.details;
    }
}