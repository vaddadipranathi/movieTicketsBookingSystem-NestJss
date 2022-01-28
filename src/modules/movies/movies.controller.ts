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
import { AddMoviesDto } from './addMovies.dto';
import { MoviesService } from './movies.service';

/**
 * Starting of movie service
 */
@Controller('movies')
@ApiTags('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  /**
   *
   * @param addMoviesDto accepts objects of addMoviesDto
   * @returns movie object , if movie is added Successfully
   */
  @Post('/addMovie')
  addMovieDetails(@Body() addMoviesDto: AddMoviesDto): Promise<string> {
    return this.moviesService.addMovieDetails(addMoviesDto);
  }

  /**
   *
   * @returns all movies objects
   */
  @Get('/getAllMovies')
  async getAllMovies(): Promise<any> {
    return await this.moviesService.getAllMovies();
  }

  /**
   *
   * @param addMoviesDto recives input of type addMovieDto
   * @param id  recievs input of number
   * @returns promise if user gets updated succesfully
   */
  @Put('/updateMovie/:id')
  updateResult(@Param('id') id: number, @Body() addMoviesDto: AddMoviesDto) {
    return this.moviesService.updateResult(addMoviesDto, id);
  }

  /**
   *
   * @param id accepts id as input of type number
   * @returns a string if movie was deleted Successfully
   */
  @Delete('deleteMovie/:id')
  deleteUser(@Param('id') id: number) {
    return this.moviesService.deleteMovie(id);
  }
}
