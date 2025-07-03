import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { ContentsModule } from './contents/contents.module';
import { QuestionsModule } from './questions/questions.module';
import { ReviewsModule } from './reviews/reviews.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/users.entity';
import { Review } from './reviews/entities/review.entity';
import { Question } from './questions/entities/question.entity';
import { Course } from './courses/entities/course.entity';
import { Content } from './contents/entities/content.entity';

@Module({
  imports: [UsersModule, CoursesModule, ContentsModule, QuestionsModule, ReviewsModule, TypeOrmModule.forRoot({
    host: 'localhost',
    type: 'postgres',
    port: 5433,
    username: 'postgres',
    password: 'password',
    database: 'course_api',
    entities: [User, Review, Question, Course, Content],
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
