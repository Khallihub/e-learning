import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model, Types } from 'mongoose';
import { courseDto } from './courseDto/course.dto';
import { COURSE } from './courses.model';

@Injectable()
export class CoursesService {
  constructor(@InjectModel('Course') private course: Model<COURSE>) {}

  async createCourse(dto: courseDto): Promise<boolean> {
    this.course.remove({ Name: null });
    let coursea;
    try {
      coursea = await this.course
        .findOne({
          Name: dto.Name,
        })
        .exec();
    } catch {}

    if (!coursea) {
      const course = new this.course({
        Name: dto.Name,
        desciption: dto.description,
        texta: dto.texta,
        textb: dto.textb,
        videoLink: dto.videoLink,
        audioLink: dto.audioLink,
        extra: dto.extra,
      });

      const newCourse = await course.save();
      return true;
    } else {
      return false;
    }
  }

  async updateCourse(dto: courseDto): Promise<boolean> {
    let course;
    try {
      course = await this.course
        .findOne({
          Name: dto.Name,
        })
        .exec();
    } catch {
      throw new NotFoundException('course not found');
    }
    if (dto.Name) {
      course.Name = dto.Name;
    }
    if (dto.description) {
      course.desciption = dto.description;
    }
    if (dto.texta) {
      course.texta = dto.texta;
    }
    if (dto.textb) {
      course.textb = dto.textb;
    }
    if (dto.videoLink) {
      course.videoLink = dto.videoLink;
    }
    if (dto.audioLink) {
      course.audioLink = dto.audioLink;
    }
    if (dto.extra) {
      course.extra = dto.extra;
    }
    course.save();
    return true;
  }

  async deleteCourse(cname): Promise<boolean> {
    let course: Document<unknown, any, COURSE> &
      Omit<COURSE & { _id: Types.ObjectId }, never>;
    try {
      course = await this.course.findOne({
        Name: cname.name,
      });
    } catch {
      throw new NotFoundException('no course found');
    }
    course.delete();
    return true;
  }
  async getCourses(): Promise<Array<COURSE>> {
    return this.course.find()
  }

  async getSingleCourse(cname: { name: any; }) {
    let course: Document<unknown, any, COURSE> &
      Omit<COURSE & { _id: Types.ObjectId }, never>;
    try {
        course = await this.course.findOne({
            Name: cname.name,
        });
    } catch {
      throw new NotFoundException('no course found');
    }

    if (course) {
        return course
    }
    else {
        throw new NotFoundException('no course found');
    }
  }
}
