import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DoramasService } from './doramas.service';
import { CreateDoramaDTO } from './dto/create-dorama.dto';
import { Dorama } from './schemas/dorama.schema';
import { updateDoramaDTO } from './dto/update-dorama.dto';

@Controller('doramas')
export class DoramasController {
  constructor(private readonly doramasService: DoramasService) {}

  @Get()
  findAll(): Promise<Dorama[]> {
    return this.doramasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Dorama> {
    return this.doramasService.findOne(id);
  }

  @Post()
  create(@Body() createDoramaDTO: CreateDoramaDTO): Promise<Dorama> {
    return this.doramasService.create(createDoramaDTO);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: updateDoramaDTO): void {
    return this.doramasService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.doramasService.remove(id);
  }
}
