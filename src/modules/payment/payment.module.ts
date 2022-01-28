import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { Theater } from './../../entity/theater.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from 'src/entity/payment.entity';
import { TheaterService } from '../theater/theater.service';
import { UserService } from './../user/user.service';
import { User } from 'src/entity/user.entity';

/**
 * Starting of payment module
 */
@Module({
  imports: [TypeOrmModule.forFeature([Payment, Theater, User])],
  providers: [PaymentService, TheaterService, UserService],
  controllers: [PaymentController],
})
export class PaymentModule {}
