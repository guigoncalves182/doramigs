import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Episode, EpisodeSchema } from './schemas/episode.schema';
import { EpisodesController } from './episodes.controller';
import { EpisodesService } from './episodes.service';
import { Dorama, DoramaSchema } from '../doramas/schemas/dorama.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Episode.name, schema: EpisodeSchema },
      { name: Dorama.name, schema: DoramaSchema },
    ]),
  ],
  controllers: [EpisodesController],
  providers: [EpisodesService],
})
export class EpisodeModule {}
