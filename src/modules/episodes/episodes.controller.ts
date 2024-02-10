import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEpisodeDTO } from './dto/create-episode.dto';
import { UpdateEpisodeDTO } from './dto/update-episode.dto';
import { Episode } from './schemas/episode.schema';
import { EpisodesService } from './episodes.service';

@Controller('episodes')
export class EpisodesController {
  constructor(private readonly episodeService: EpisodesService) {}

  @Get()
  findAll(): Promise<Episode[]> {
    return this.episodeService.findAll();
  }

  @Post()
  create(@Body() episodeService: CreateEpisodeDTO): Promise<Episode> {
    return this.episodeService.create(episodeService);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Episode> {
    return this.episodeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateEpisodeDTO): void {
    return this.episodeService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.episodeService.remove(id);
  }
}
