import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Response } from "express";
import { getReasonPhrase } from "http-status-codes";
import { BffException } from "src/exceptions/BffException.exception";

@Catch(BffException)
export class BffExceptionFilter implements ExceptionFilter {
  catch(exception: BffException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response
      .status(exception.getStatus())
      .json({
        message: exception.getMessage(),
        status: exception.getStatus(),
        details: exception.getDetails(),
      })
      .send();
  }
}