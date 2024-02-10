import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoramasController } from './doramas.controller';
import { DoramasService } from './doramas.service';
import { Dorama, DoramaSchema } from './schemas/dorama.schema';
import { Episode, EpisodeSchema } from '../episodes/schemas/episode.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Dorama.name, schema: DoramaSchema },
      { name: Episode.name, schema: EpisodeSchema },
    ]),
  ],
  controllers: [DoramasController],
  providers: [DoramasService],
})
export class DoramasModule {}
