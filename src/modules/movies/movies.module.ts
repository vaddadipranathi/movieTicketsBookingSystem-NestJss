import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { Movies } from './../../entity/movies.entity';
import { Theater } from './../../entity/theater.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TheaterService } from '../theater/theater.service';

/**
 * Starting of movie module
 */
@Module({
  imports: [TypeOrmModule.forFeature([Movies, Theater])],
  providers: [MoviesService, TheaterService],
  controllers: [MoviesController],
})
export class MoviesModule {}
