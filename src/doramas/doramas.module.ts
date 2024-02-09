import { Module } from '@nestjs/common';
import { DoramasController } from './doramas.controller';
import { DoramasService } from './doramas.service';

@Module({
  imports: [],
  controllers: [DoramasController],
  providers: [DoramasService],
})
export class DoramasModule {}
