import { Injectable } from '@nestjs/common';

@Injectable()
export class IdkService {
  getHello(name: string): string {
    return `Hello ${name}!`;
  }
  getInt(): number {
    return 420;
  }
}
