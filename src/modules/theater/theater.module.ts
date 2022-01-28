import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Theater } from './../../entity/theater.entity';
import { TheaterController } from './theater.controller';
import { TheaterService } from './theater.service';

/**
 * Starting of thater module
 */
@Module({
  imports: [TypeOrmModule.forFeature([Theater])],
  controllers: [TheaterController],
  providers: [TheaterService],
  exports: [TheaterService],
})
export class TheaterModule {}
