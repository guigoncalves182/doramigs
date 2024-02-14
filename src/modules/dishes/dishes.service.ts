import { Injectable } from '@nestjs/common';
import { Dish } from './schemas/dish.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateDishDTO } from './dto/update-dish.dto';
import { CreateDishDTO } from './dto/create-dish.dto';

@Injectable()
export class DishesService {
  constructor(
    @InjectModel(Dish.name)
    private dishModel: Model<Dish>,
  ) {}

  async findOne(id: string): Promise<Dish> {
    return await this.dishModel.findById(id);
  }

  async findAll(): Promise<Dish[]> {
    return await this.dishModel.find();
  }

  async create(createDishDto: CreateDishDTO): Promise<Dish> {
    return await this.dishModel.create(createDishDto);
  }

  update(id: string, body: UpdateDishDTO): void {
    this.dishModel.updateOne({ _id: id }, body).exec();
  }

  remove(id: string): void {
    this.dishModel.deleteOne({ _id: id }).exec();
  }
}
