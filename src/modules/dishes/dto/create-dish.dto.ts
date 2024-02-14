import { IsArray, IsString } from 'class-validator';

export class CreateDishDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsArray()
  ingredients: string[];

  @IsString()
  method: string;
}
