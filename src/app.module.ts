import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdkModule } from './idk/idk.module';
@Module({
  imports: [IdkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
