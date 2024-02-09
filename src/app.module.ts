import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoramasModule } from './doramas/doramas.module';

@Module({
  imports: [DoramasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
