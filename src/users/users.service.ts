import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { Repository } from 'typeorm';
import { UserNotFoundException } from './exceptions/user-not-found.exception';

@Injectable()
export class UsersService {


    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}


    async create(createUser: CreateUserDto){

        const user = new User();

        user.name = createUser.name;
        user.lastName = createUser.lastName;
        user.email = createUser.email;
        user.password = createUser.password; // Use a password encoder

        this.userRepository.save(user);

        return user;
    }

    async findAll() {
        return this.userRepository.find();
    }

    async findOne(id: number) {
        const user = await this.userRepository.findOneBy({id});

        if(user == null){
            throw new UserNotFoundException;
        }
        return user;
    }

    // update(id: number, updateReviewDto: UpdateReviewDto) {
    // return `This action updates a #${id} review`;
    // }

    async remove(id: number) {
        const user = await this.findOne(id);
        this.userRepository.delete(user)
    }

}
