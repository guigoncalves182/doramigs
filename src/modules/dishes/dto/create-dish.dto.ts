import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateDishDTO {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsArray()
  @IsOptional()
  ingredients: string[];

  @IsString()
  @IsOptional()
  method: string;
}
