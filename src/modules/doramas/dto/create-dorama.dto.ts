import { CreateEpisodeDTO } from 'src/modules/episodes/dto/create-episode.dto';

export class CreateDoramaDTO {
  readonly title: string;
  readonly rating: number;
  readonly isOnAir: boolean;
  readonly originCountry: string;
  readonly episodes: CreateEpisodeDTO[];
}
