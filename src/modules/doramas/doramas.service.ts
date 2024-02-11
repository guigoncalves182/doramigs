import { Injectable } from '@nestjs/common';
import { CreateDoramaDTO } from './dto/create-dorama.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Dorama } from './schemas/dorama.schema';
import { Model } from 'mongoose';
import { updateDoramaDTO } from './dto/update-dorama.dto';
import { Episode } from '../episodes/schemas/episode.schema';

@Injectable()
export class DoramasService {
  constructor(
    @InjectModel(Dorama.name)
    private doramaModel: Model<Dorama>,

    @InjectModel(Episode.name)
    private episodeModel: Model<Episode>,
  ) {}

  async findOne(id: string): Promise<Dorama> {
    return await this.doramaModel.findById(id);
  }

  async findAll(): Promise<Dorama[]> {
    return await this.doramaModel.find();
  }

  async create(createDoramaDto: CreateDoramaDTO): Promise<Dorama> {
    const episodes = await this.episodeModel.insertMany(
      createDoramaDto.episodes,
    );

    const episodeIds = episodes.map((episode) => episode._id);

    const dorama = await this.doramaModel.create({
      ...createDoramaDto,
      episodes: episodeIds,
    });

    return dorama;
  }

  update(id: string, body: updateDoramaDTO): void {
    this.doramaModel.updateOne({ _id: id }, body).exec();
  }

  remove(id: string): void {
    this.doramaModel.deleteOne({ _id: id }).exec();
  }
}
