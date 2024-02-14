import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateEpisodeDTO } from './create-episode.dto';

export class UpdateEpisodeDTO extends CreateEpisodeDTO {
  @IsString()
  @IsOptional()
  readonly title: string;

  @IsNumber()
  @IsOptional()
  readonly season: number;

  @IsNumber()
  @IsOptional()
  readonly index: number;
}
