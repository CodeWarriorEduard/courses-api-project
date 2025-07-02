import { Content } from 'src/contents/entities/content.entity';
import { Question } from 'src/questions/entities/question.entity';
import { Review } from 'src/reviews/entities/review.entity';
import { User } from 'src/users/entities/users.entity';
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    courseName: string
    @Column()
    description: string
    @Column()
    releaseDate: Date
    @Column()
    level:number
    @Column()
    category: string
    @Column()
    price:number
    @Column()
    language:string
    
    @Column()
    active: boolean
    @OneToMany(type => Content, content=> content.id)
    contents :Content[]
    @OneToMany(type => Question,question=> question.id)
    question : Question[]
    @OneToMany(type=> Review, review => review.id)
    review :Review[]

    @ManyToMany(() => User, (user) => user.id)
    users: User[]

    



}
