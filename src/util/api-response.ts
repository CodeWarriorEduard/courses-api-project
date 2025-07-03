export class ApiResponse<T>{

    constructor(
    status: number,
    message: string,
    data: T,
    timestamp: string,
    ) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.timestamp = timestamp;
    }


    status: number;
    message: string;
    data: T;
    timestamp: string;


}