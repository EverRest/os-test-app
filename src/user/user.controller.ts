import { Controller, Delete, Get, Post, Put, Version } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Version('1.0')
  @Get()
  async findAll(): Promise<string> {
    return this.userService.getAllUsers();
  }
  @Version('1.0')
  @Post()
  async store(): Promise<string> {
    return this.userService.createUser();
  }
  @Version('1.0')
  @Put()
  async update(): Promise<string> {
    return this.userService.updateUser();
  }
  @Version('1.0')
  @Delete()
  async delete(): Promise<string> {
    return this.userService.deleteUser();
  }
}
