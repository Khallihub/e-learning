import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userDto } from './userDto/user.dto';
import { USER } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('user') private user: Model<USER>) {}

  async addUser(dto: userDto) {
    const user = new this.user({
      Name: dto.Name,
      email: dto.email,
      hash: dto.password,
      role: dto.role,
    });
    const result = await user.save();
    return result;
  }

  async findUser(info: {
    username: string;
    pass: string; 
  }): Promise<USER | undefined> {
    return this.user.findOne({ email: info.username });
    
  }

  async updateUser(userId: string, arg1: { hashedRt: any }) {
    console.log(userId,arg1.hashedRt)
    const doc = await this.user.findByIdAndUpdate(userId, {
      hashedRt: arg1.hashedRt,
    });
    if (!doc) {
      throw new HttpException('A problem has occured', HttpStatus.BAD_REQUEST);
    } else {
      console.log('Updated document: ', doc);
    }
    return true;
  }
}
