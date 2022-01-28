import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddPaymentDto } from './addPaymentDto';
import { PaymentService } from './payment.service';

/**
 * Starting of payment controller
 */
@Controller('payment')
@ApiTags('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  /**
   *
   * @param addPaymentDto accepts objects of addPaymentDto
   * @returns payment object , if user is payment Successfully
   */
  @Post('/addPayment')
  addPaymentDetails(@Body() addPaymentDto: AddPaymentDto): Promise<string> {
    return this.paymentService.addPaymentDetails(addPaymentDto);
  }

  /**
   *
   * @returns all the payment details
   */
  @Get()
  async getAllPaymentDetails(): Promise<any> {
    return this.paymentService.getAllPaymentDetails();
  }
}
