import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiResponse } from 'src/util/api-response';
import { User } from './entities/users.entity';

@Controller('users')
export class UsersController {


    constructor(
        private readonly userService: UsersService
    ){}

    @Get('all')
    async findAll(){
        const users = await this.userService.findAll(); 
        return new ApiResponse<User[]>(
            HttpStatus.OK,
            "Users returned successfully",
            users,
            new Date().toDateString()
        )
    }


    @Get(':id')
    async findOneById(@Param() id:any){
        const user = await this.userService.findOne(id.id);
        return new ApiResponse<User>(
            HttpStatus.OK,
            "Users returned successfully",
            user,
            new Date().toDateString()
        )
    }


    @Post()
    async createUser(@Body() createUserDTO: CreateUserDto){
        const createdUSer = await this.userService.create(createUserDTO);
        return new ApiResponse<User>(
            HttpStatus.CREATED,
            "User created successfully",
            createdUSer,
            new Date().toDateString()
        )
    }

    @Delete(":id")
    async deleteUSer(@Param() id:any){
        await this.userService.remove(id.id);;
        return new ApiResponse<null>(
            HttpStatus.OK,
            "User deleted successfully",
            null,
            new Date().toDateString()
        )
    }

}
