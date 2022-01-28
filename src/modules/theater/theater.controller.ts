import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Theater } from 'src/entity/theater.entity';
import { AddTheaterDto } from './addTheater.dto';
import { TheaterService } from './theater.service';

/**
 * Starting of theater controller
 */
@Controller('theater')
@ApiTags('theater')
export class TheaterController {
  constructor(private readonly theaterService: TheaterService) {}

  /**
   *
   * @param addtheaterDto accepts objects of addtheaterDto
   * @returns theater object , if theater is added Successfully
   */
  @Post('/addTheater')
  addTheaterDetails(@Body() addtheaterDto: AddTheaterDto): Promise<string> {
    return this.theaterService.addTheaterDetails(addtheaterDto);
  }

  /**
   *
   * @returns all ttheater objects ,
   */
  @Get('/getAllTheaters')
  async getAllTheaters(): Promise<Theater[]> {
    return await this.theaterService.getAllTheater();
  }

  /**
   *
   * @param addtheaterDto recived input type of addtheaterDto
   * @param id input type of number
   * @returns promise if theater details gets updated succesfully
   */
  @Put('/updateTheater/:id')
  async updateTheaterDetails(
    @Body() addtheaterDto: AddTheaterDto,
    @Param('id') id: number,
  ) {
    return await this.theaterService.updateTheaterDetails(addtheaterDto, id);
  }

  /**
   *
   * @param id accepts id as input of type number
   * @returns a string if theater was deleted Successfully
   */
  @Delete('/:id')
  deleteTheater(@Param('id') id: number) {
    return this.theaterService.deleteTheater(id);
  }
}
