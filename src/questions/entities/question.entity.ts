import { Course } from "src/courses/entities/course.entity";
import { User } from "src/users/entities/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    questionContent: string
    @Column()
    dateRelease: Date
    @Column()
    responded: boolean
    @Column()
    responseContent: string
    @ManyToOne(type => Course,course=> course.id)
    course: Course
    @ManyToOne(type => User,user => user.id)
    user: User


}
