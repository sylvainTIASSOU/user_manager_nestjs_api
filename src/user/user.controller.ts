import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import path from 'path';

@Controller('user')
export class UserController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(readonly usersService: UserService) {}

  //get all user controler
  @Get()
  public getAllUser() {
    return this.usersService.getAll();
  }

  //methode to create user controller
  @Post()
  createUser(@Body() user: UserDTO) {
    return this.usersService.createUser(user);
  }

  @Patch(':id')
  updateUser(@Param('id') id: number, @Body() user: UserDTO) {
    return this.usersService.updateUser(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(id);
  }
}
