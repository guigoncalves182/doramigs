import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEpisodeDTO {
  @IsString()
  readonly title: string;

  @IsNumber()
  @IsOptional()
  readonly durationInMinutes: number;

  @IsDateString()
  @IsOptional()
  readonly originalRelease: string;

  @IsString()
  @IsOptional()
  readonly synopsis: string;

  @IsNumber()
  readonly season: number;

  @IsNumber()
  readonly index: number;
}
