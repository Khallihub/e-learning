import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { COURSE, courseSchema } from './courses.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Course',
      schema: courseSchema
    }]),
    COURSE
  ],
  providers: [CoursesService],
  controllers: [CoursesController]
})
export class CoursesModule {}
