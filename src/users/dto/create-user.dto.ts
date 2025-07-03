import { IsEmail, IsString, MaxLength, MinLength,IsStrongPassword, IsNotEmpty } from "class-validator"

export class CreateUserDto{

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    name:string
    @MaxLength(50)
    lastName: string

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(25)
    password: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(255)
    email: string
}