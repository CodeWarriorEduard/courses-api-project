import { Course } from "src/courses/entities/course.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Content {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name: string
    @Column()
    description: string
    @Column()
    sectionNumber: number
    @Column()
    watched: boolean
    @Column()
    duration: number
    @ManyToOne(type => Course, course => course.id)
    course: Course

}
