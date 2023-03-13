import { Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('getUser')
  async getUser(email: {username: string, pass: string}){
    return this.usersService.findUser(email)
  }
}
