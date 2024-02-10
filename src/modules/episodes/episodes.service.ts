import { Model } from 'mongoose';
import { Episode } from './schemas/episode.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateEpisodeDTO } from './dto/create-episode.dto';
import { UpdateEpisodeDTO } from './dto/update-episode.dto';

@Injectable()
export class EpisodesService {
  constructor(
    @InjectModel(Episode.name)
    private doramaModel: Model<Episode>,
  ) {}

  async findOne(id: string): Promise<Episode> {
    return this.doramaModel.findById(id);
  }

  async findAll(): Promise<Episode[]> {
    return this.doramaModel.find();
  }

  async create(createDoramaDto: CreateEpisodeDTO): Promise<Episode> {
    const dorama = new this.doramaModel(createDoramaDto);
    return dorama.save();
  }

  update(id: string, body: UpdateEpisodeDTO): void {
    this.doramaModel.updateOne({ _id: id }, body).exec();
  }

  remove(id: string): void {
    this.doramaModel.deleteOne({ _id: id }).exec();
  }
}
