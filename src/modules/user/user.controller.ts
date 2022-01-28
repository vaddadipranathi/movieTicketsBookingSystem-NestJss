import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddUserDto } from './addUser.dto';
import { UserService } from './user.service';

/**
 * Starting of user controller
 */
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   *
   * @param addUserDto accepts objects of adduserDto
   * @returns user object , if user is added Successfully
   */
  @Post('/addUser')
  addUserDetails(@Body() addUserDto: AddUserDto): Promise<string> {
    return this.userService.addUserDetails(addUserDto);
  }

  /**
   *
   * @param emailId recives input as string
   * @returns a promise of user gets deleted successfully
   */
  @Delete('deleteUSer/:emailId')
  deleteUser(@Param('emailId') emailId: string) {
    return this.userService.deleteUser(emailId);
  }

  /**
   *
   * @param emailId recives input as string
   * @returns  promise of user gets updated succesfully
   */
  @Put('updateUSer/:emailId')
  updateUser(
    @Param('emailId') emailId: string,
    @Body() addUserDto: AddUserDto,
  ) {
    return this.userService.updateUser(emailId, addUserDto);
  }
}
