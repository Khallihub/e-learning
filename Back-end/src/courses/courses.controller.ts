import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { courseDto } from './courseDto/course.dto';
import { COURSE } from './courses.model';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private courseService: CoursesService) {}

  @Post('createCourse')
  createCourse(@Body() dto: courseDto): Promise<boolean> {
    return this.courseService.createCourse(dto);
  }   

  @Post('updateCourse')
  updateCourse(@Body() dto: courseDto): Promise<boolean> {
    return this.courseService.updateCourse(dto);
  }

  @Delete('deleteCourse')
  deleteCourse(@Body() name: {name: string}): Promise<boolean> {
    return this.courseService.deleteCourse(name);
  }
  @Get('getCourses')
  getCourses(): Promise<Array<COURSE>> {
    return this.courseService.getCourses();
  }

  @Post('getSingleCourse')
  getSingleCourse(@Body() cname: { name: string }) {
    return this.courseService.getSingleCourse(cname);
  }
}


















// {
//     "Name": "python",
//     "description": "introduction to python",
//     "texta": "python is a programming language",
//     "textb": "it is high level",
//     "videoLink": "www.video.com",
//     "audioLink": "www.audio.com",
//     "extra": {
//       "question": "what is this",
//       "a": "correct",
//       "b": "incorrect"
//     }
//   }
// {
//     "Name": "java pl",
//     "description": "introduction to java",
//     "texta": "java is a programming language",
//     "textb": "it is not interesting language",
//     "videoLink": "www.video.com",
//     "audioLink": "www.audio.com",
//     "extra": {
//       "question": "what is this",
//       "a": "true",
//       "b": "false"
//     }
//   }