import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateEpisodeDTO } from './dto/create-episode.dto';
import { UpdateEpisodeDTO } from './dto/update-episode.dto';
import { Episode } from './schemas/episode.schema';
import { EpisodesService } from './episodes.service';

@Controller('episodes')
export class EpisodesController {
  constructor(private readonly episodeService: EpisodesService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Episode> {
    return this.episodeService.findOne(id);
  }

  @Get()
  findAll(): Promise<Episode[]> {
    return this.episodeService.findAll();
  }

  @Get()
  findAllByDoramaId(@Query('doramaId') doramaId: string): Promise<Episode[]> {
    return this.episodeService.findAllByDoramaId(doramaId);
  }

  @Post(':doramaId')
  create(
    @Param('doramaId') doramaId: string,
    @Body() episodeService: CreateEpisodeDTO | CreateEpisodeDTO[],
  ): Promise<Episode | Episode[]> {
    if (Array.isArray(episodeService))
      return this.episodeService.createMany(episodeService, doramaId);

    return this.episodeService.create(episodeService, doramaId);
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
