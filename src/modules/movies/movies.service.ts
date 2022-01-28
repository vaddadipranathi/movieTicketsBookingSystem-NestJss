import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataNotAdded } from 'src/common/filter/customException.exception';
import { Repository } from 'typeorm';
import { TheaterService } from '../theater/theater.service';
import { Movies } from './../../entity/movies.entity';
import { AddMoviesDto } from './addMovies.dto';
import { HttpException } from '@nestjs/common';

/**
 * Starting of movie service
 */
@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movies)
    private movieRepository: Repository<Movies>,
    private theaterService: TheaterService,
  ) {}

  /**
   *
   * @param addMoviesDto accepts objects of addMoviesDto
   * @returns movie object , if movie is added Successfully
   */
  async addMovieDetails(addMoviesDto: AddMoviesDto): Promise<string> {
    const movie: Movies = new Movies();
    const theaterResult = await this.theaterService.getTheaterByName(
      addMoviesDto.location,
      addMoviesDto.theaterName,
    );
    Object.assign(movie, addMoviesDto);
    movie.isActive = true;
    movie.updatedAt = '';
    movie.updatedTime = '';
    const date = new Date();
    movie.createdAt = date.toLocaleDateString();
    movie.createTime = date.toLocaleTimeString();
    movie.theaters = theaterResult;
    movie.theaters = theaterResult;
    const result = await this.movieRepository.save(movie);
    if (result) {
      return 'movies registered sucessfully';
    } else {
      throw new DataNotAdded();
    }
  }

  /**
   *
   * @returns all movies objects
   */
  async getAllMovies(): Promise<any> {
    return await this.movieRepository.find({
      isActive: true,
    });
  }

  /**
   *
   * @param addMoviesDto recives input of type addMovieDto
   * @param id  recievs input of number
   * @returns promise if user gets updated succesfully
   */
  async updateResult(addMoviesDto: AddMoviesDto, id: number) {
    const movie: Movies = new Movies();
    const movieResult = await this.movieRepository.findOne({
      id: id,
    });
    if (movieResult) {
      Object.assign(movieResult, addMoviesDto);
      Object.assign(movie, movieResult);
      const date = new Date();
      movie.updatedAt = date.toLocaleDateString();
      movie.updatedTime = date.toLocaleTimeString();
      console.log('movie obj', movie);
      return await this.movieRepository.update(id, movie);
    } else {
      throw new HttpException('Movie result not found', HttpStatus.NOT_FOUND);
    }
  }

  /**
   *
   * @param id accepts id as input of type number
   * @returns a string if movie was deleted Successfully
   */
  async deleteMovie(id: number): Promise<string> {
    await this.movieRepository.delete(id);
    return 'Movie deleted Successfully';
  }
}
