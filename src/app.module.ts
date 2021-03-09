import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdkService } from './idk.service';
import { IdkController } from './idk.controller';
@Module({
  imports: [],
  controllers: [AppController, IdkController],
  providers: [AppService, IdkService],
})
export class AppModule {}
