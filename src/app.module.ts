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
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env.${process.env.NODE_ENV}` }),
    UsersModule,
    CoursesModule,
    ContentsModule,
    QuestionsModule,
    ReviewsModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        host: configService.get('HOST'),
        type: 'postgres',
        port: configService.get('DBPORT'),
        username: configService.get('USERNAME'),
        password: configService.get('PASSWORD'),
        database: configService.get('DATABASE'),
        entities: [User, Review, Question, Course, Content],
        synchronize: false,
      }),
      inject:[ConfigService]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
