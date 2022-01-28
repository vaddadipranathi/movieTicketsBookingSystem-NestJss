import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  DataNotAdded,
  DataNotFoundException,
} from 'src/common/filter/customException.exception';
import { Repository } from 'typeorm';
import { Theater } from './../../entity/theater.entity';
import { AddTheaterDto } from './addTheater.dto';

/**
 * Starting of theater service
 */
@Injectable()
export class TheaterService {
  constructor(
    @InjectRepository(Theater)
    private thaterRepository: Repository<Theater>,
  ) {}

  /**
   *
   * @param addtheaterDto accepts objects of addtheaterDto
   * @returns theater object , if theater is added Successfully
   */
  async addTheaterDetails(addtheaterDto: AddTheaterDto): Promise<string> {
    const theater: Theater = new Theater();
    Object.assign(theater, addtheaterDto);
    theater.isActive = true;
    theater.updatedAt = '';
    theater.updatedTime = '';
    const date = new Date();
    theater.createdAt = date.toLocaleDateString();
    theater.createTime = date.toLocaleTimeString();
    const result = await this.thaterRepository.save(theater);
    if (result) {
      return 'theater added sucessfully';
    } else {
      throw new DataNotAdded();
    }
  }

  /**
   *
   * @param location recives string as input
   * @param theaterName recives string as input
   * @returns theater object if data is founc
   */
  async getTheaterByName(location: string, theaterName: string) {
    return await this.thaterRepository.find({
      location: location,
      theaterName: theaterName,
    });
  }

  /**
   *
   * @returns al theater objects ,
   */
  async getAllTheater(): Promise<Theater[]> {
    const result = await this.thaterRepository.find({
      isActive: true,
    });
    if (result) {
      return result;
    } else {
      throw new DataNotFoundException();
    }
  }

  /**
   *
   * @param addtheaterDto recived input type of addtheaterDto
   * @param id input type of number
   * @returns promise if theater details gets updated succesfully
   */
  async updateTheaterDetails(addtheaterDto: AddTheaterDto, id: number) {
    const theaterObj = await this.thaterRepository.findOne({
      id: id,
    });
    if (theaterObj) {
      const theater = new Theater();
      Object.assign(theater, addtheaterDto);
      const date = new Date();
      theater.updatedAt = date.toLocaleDateString();
      theater.updatedTime = date.toLocaleTimeString();
      return await this.thaterRepository.update(id, theater);
    } else {
      throw new DataNotFoundException();
    }
  }

  /**
   *
   * @param id accepts id as input of type number
   * @returns a string if theater was deleted Successfully
   */
  async deleteTheater(id: number): Promise<string> {
    const theaterObj = await this.thaterRepository.delete(id);

    if (theaterObj) {
      return 'theater deleted Successfully';
    } else throw new DataNotFoundException();
  }
}
