import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Dish } from './schemas/dish.schema';
import { DishesService } from './dishes.service';
import { CreateDishDTO } from './dto/create-dish.dto';
import { UpdateDishDTO } from './dto/update-dish.dto';

@Controller('dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Get()
  findAll(): Promise<Dish[]> {
    return this.dishesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Dish> {
    return this.dishesService.findOne(id);
  }

  @Post()
  create(@Body() createDishDTO: CreateDishDTO): Promise<Dish> {
    return this.dishesService.create(createDishDTO);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateDishDTO): void {
    return this.dishesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.dishesService.remove(id);
  }
}
