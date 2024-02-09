import { Module } from '@nestjs/common';
import { DoramasController } from './doramas.controller';
import { DoramasService } from './doramas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Dorama, DoramaSchema } from './schemas/dorama.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dorama.name, schema: DoramaSchema }]),
  ],
  controllers: [DoramasController],
  providers: [DoramasService],
})
export class DoramasModule {}
