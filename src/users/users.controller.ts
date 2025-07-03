import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {


    constructor(
        private readonly userService: UsersService
    ){}

    @Get('all')
    findAll(){
        return this.userService.findAll()
    }


    @Get(':id')
    findOneById(@Param() id:any){
        return this.userService.findOne(id.id);
    }


    @Post()
    createUser(@Body() createUserDTO: CreateUserDto){

        this.userService.create(createUserDTO);

    }

    @Delete(":id")
    @HttpCode(204)
    deleteUSer(@Param() id:any){
      this.userService.remove(id.id);
    }

}
