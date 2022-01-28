import { Injectable } from '@nestjs/common';

/**
 * Starting of app service
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
