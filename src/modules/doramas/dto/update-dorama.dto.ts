import { IsBoolean, IsOptional } from 'class-validator';
import { CreateDoramaDTO } from './create-dorama.dto';
export class updateDoramaDTO extends CreateDoramaDTO {
  @IsOptional()
  readonly title: string;

  @IsBoolean()
  readonly isActive: boolean;
}
