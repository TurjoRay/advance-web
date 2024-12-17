import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.Dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}


    @Post('users')
    @UsePipes(new ValidationPipe)
    async addUser(@Body() myObj: UserDTO): Promise<UserDTO> {
        return this.userService.addUser(myObj);
    }

    @Post()
    async createUser(@Body() user: UserDTO): Promise<UserDTO> {
        return this.userService.create(user);
    }

    @Get('fullname/:substring')
    async getUserBySubString(@Param('substring') substring: string): Promise<UserDTO[]>{
        return this.userService.findByFullName(substring);
    }

    @Get('username/:usernames')
    async getUserByUsername(@Param('username') username: string): Promise<UserDTO>{
        return this.userService.findOneByUsername(username);
    }
    @Delete('delete/:username')
    async deleteUser(@Param('username') username: number) : Promise<void> {
        return this.userService.remove(username);
    }
}
