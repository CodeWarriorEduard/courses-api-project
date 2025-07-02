import { Course } from "src/courses/entities/course.entity";
import { User } from "src/users/entities/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    rating: number
    @Column()
    comments: string
    @Column()
    releaseDate: Date
    @ManyToOne(type => Course, course=> course.id)
    course: Course
    @ManyToOne(type => User, user=> user.id)
    user: User

}
