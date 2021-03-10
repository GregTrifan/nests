import { Controller, Get, Param, Post } from '@nestjs/common';
import { IdkService } from './idk.service';

@Controller('idk')
export class IdkController {
  constructor(private readonly idkService: IdkService) {}

  @Get(':name')
  getHello(@Param('name') name: string): string {
    return this.idkService.getHello(name);
  }
  @Post()
  getIdk(): number {
    return this.idkService.getInt();
  }
}
