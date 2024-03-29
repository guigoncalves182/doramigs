import { Injectable } from '@nestjs/common';
import { CreateDoramaDTO } from './dto/create-dorama.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Dorama } from './schemas/dorama.schema';
import { Model } from 'mongoose';
import { UpdateDoramaDTO } from './dto/update-dorama.dto';

@Injectable()
export class DoramasService {
  constructor(
    @InjectModel(Dorama.name)
    private doramaModel: Model<Dorama>,
  ) {}

  async findOne(id: string): Promise<Dorama> {
    return await this.doramaModel.findById(id).populate('episodes');
  }

  async findAll(): Promise<Dorama[]> {
    return await this.doramaModel.find().populate('episodes');
  }

  async create(createDoramaDto: CreateDoramaDTO): Promise<Dorama> {
    return await this.doramaModel.create(createDoramaDto);
  }

  update(id: string, body: UpdateDoramaDTO): void {
    this.doramaModel.updateOne({ _id: id }, body).exec();
  }

  remove(id: string): void {
    this.doramaModel.deleteOne({ _id: id }).exec();
  }
}
