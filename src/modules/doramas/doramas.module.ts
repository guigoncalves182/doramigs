import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoramasController } from './doramas.controller';
import { DoramasService } from './doramas.service';
import { Dorama, DoramaSchema } from './schemas/dorama.schema';
import { EpisodeModule } from '../episodes/episodes.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dorama.name, schema: DoramaSchema }]),
    EpisodeModule,
  ],
  controllers: [DoramasController],
  providers: [DoramasService],
})
export class DoramasModule {}
