import {
  IsArray,
  IsBoolean,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { TAGS } from 'src/consts/tags';
import { TTag } from 'src/interfaces/tags';

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
  @IsIn(TAGS, { each: true })
  readonly tags: TTag[];

  @IsString()
  @IsOptional()
  readonly imageCover: string;
}
