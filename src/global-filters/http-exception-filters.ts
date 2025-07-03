import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";
import { Request, Response } from 'express';
import { timestamp } from "rxjs";
import { ApiResponse } from "src/util/api-response";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter{



    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp(); // Http context
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const statusT = exception.getStatus();

        response
            .status(statusT)
            .json(
                new ApiResponse(
                    statusT,
                    exception.message,
                    [],
                    new Date().toDateString()
                )
            );

    }

}