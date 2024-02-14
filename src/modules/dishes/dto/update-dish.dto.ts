import { IsArray, IsOptional, IsString } from 'class-validator';
import { CreateDishDTO } from './create-dish.dto';

export class UpdateDishDTO extends CreateDishDTO {
  @IsString()
  @IsOptional()
  name: string;
}
