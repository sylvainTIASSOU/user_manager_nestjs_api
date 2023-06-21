import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Tu n a que ça a dire ? hello word!';
  }
}
