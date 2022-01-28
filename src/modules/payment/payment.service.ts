import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataNotAdded } from 'src/common/filter/customException.exception';
import { Repository } from 'typeorm';
import { TheaterService } from '../theater/theater.service';
import { Payment } from './../../entity/payment.entity';
import { UserService } from './../user/user.service';
import { AddPaymentDto } from './addPaymentDto';
import { UnauthorizedException } from './../../common/filter/customException.exception';

/**
 * Starting of payment service
 */
@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
    private theaterService: TheaterService,
    private userService: UserService,
  ) {}

  /**
   *
   * @param addPaymentDto accepts objects of addPaymentDto
   * @returns payment object , if payment is added Successfully
   */
  async addPaymentDetails(addPaymentDto: AddPaymentDto): Promise<string> {
    const userResult = await this.userService.getUserByEmail(
      addPaymentDto.emailId,
    );
    if (userResult.isActive == true) {
      const payment = new Payment();
      const theaterResult: any = await this.theaterService.getTheaterByName(
        addPaymentDto.location,
        addPaymentDto.theaterName,
      );
      const date = new Date();
      payment.createdAt = date.toLocaleDateString();
      payment.createTime = date.toLocaleTimeString();
      // payment.theater = theaterResult;
      payment.user = userResult;
      payment.status = 'done';
      Object.assign(payment, addPaymentDto);
      const result = await this.paymentRepository.save(payment);
      if (result) {
        return 'payment done sucessfully';
      } else {
        throw new DataNotAdded();
      }
    } else {
      throw new UnauthorizedException();
    }
  }
  /**
   *
   * @returns all the payment details
   */
  async getAllPaymentDetails(): Promise<any> {
    return await this.paymentRepository.find();
  }
}
