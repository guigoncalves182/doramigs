import { Model } from 'mongoose';
import { Episode } from './schemas/episode.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateEpisodeDTO } from './dto/create-episode.dto';
import { UpdateEpisodeDTO } from './dto/update-episode.dto';
import { Dorama } from '../doramas/schemas/dorama.schema';

@Injectable()
export class EpisodesService {
  constructor(
    @InjectModel(Episode.name)
    private episodeModel: Model<Episode>,

    @InjectModel(Dorama.name)
    private doramaModel: Model<Dorama>,
  ) {}

  async findOne(id: string): Promise<Episode> {
    return this.episodeModel.findById(id);
  }

  async findAll(): Promise<Episode[]> {
    return this.episodeModel.find();
  }

  async findAllByDoramaId(doramaId: string): Promise<Episode[]> {
    const { episodes } = await this.doramaModel.findById(doramaId);
    return this.episodeModel.findById(episodes);
  }

  async create(
    createEpisodeDto: CreateEpisodeDTO,
    doramaId: string,
  ): Promise<Episode> {
    const episode = await this.episodeModel.create(createEpisodeDto);

    this.doramaModel
      .updateOne({ _id: doramaId }, { $push: { episodes: episode._id } })
      .exec();

    return episode;
  }

  async createMany(
    createEpisodeDto: CreateEpisodeDTO[],
    doramaId: string,
  ): Promise<Episode[]> {
    const episodes = await this.episodeModel.insertMany(createEpisodeDto);

    episodes.map((episode) => {
      return this.doramaModel
        .updateOne({ _id: doramaId }, { $push: { episodes: episode._id } })
        .exec();
    });

    return episodes;
  }

  update(id: string, body: UpdateEpisodeDTO): void {
    this.episodeModel.updateOne({ _id: id }, body).exec();
  }

  remove(id: string): void {
    this.episodeModel.deleteOne({ _id: id }).exec();
  }
}
