import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Movies } from './entity/movies.entity';
import { Theater } from './entity/theater.entity';
import { User } from './entity/user.entity';
import { Payment } from './entity/payment.entity';
import { UserModule } from './modules/user/user.module';
import { TheaterModule } from './modules/theater/theater.module';
import { MoviesModule } from './modules/movies/movies.module';
import { PaymentModule } from './modules/payment/payment.module';

/**
 * Starting of user module
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Chelli1@',
      database: 'movieBookingApp',
      entities: [User, Theater, Movies, Payment],
      synchronize: false,
    }),
    UserModule,
    TheaterModule,
    MoviesModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
