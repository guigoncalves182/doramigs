import {
  IsArray,
  IsBoolean,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { EPISODE_TAGS } from 'src/consts/tags';
import { TEpisodeTag } from 'src/interfaces/episodeTag';

export class CreateDoramaDTO {
  @IsString()
  readonly title: string;

  @IsBoolean()
  @IsOptional()
  isActive: boolean;

  @IsNumber()
  @IsOptional()
  readonly rating: number;

  @IsBoolean()
  @IsOptional()
  readonly isOnAir: boolean;

  @IsString()
  @IsOptional()
  readonly originCountry: string;

  @IsString()
  @IsOptional()
  readonly synopsis: string;

  @IsArray()
  @IsOptional()
  @IsIn(EPISODE_TAGS, { each: true })
  readonly tags: TEpisodeTag[];

  @IsString()
  @IsOptional()
  readonly imageCover: string;
}
