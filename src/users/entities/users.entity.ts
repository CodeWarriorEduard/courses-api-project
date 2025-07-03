import { Course } from "src/courses/entities/course.entity";
import { Question } from "src/questions/entities/question.entity";
import { Review } from "src/reviews/entities/review.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User{
    
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    lastName: string
    @Column()
    password: string
    @Column()
    email: string
    @OneToMany(type => Review,review => review.id)
    review : Review[]
    @OneToMany(type => Question, question=> question.id)
    question: Question[]
    @ManyToMany(() => Course, (course) => course.id)
    @JoinTable()
    courses: Course[]
    


}