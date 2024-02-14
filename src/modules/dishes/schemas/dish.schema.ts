import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DishDocument = HydratedDocument<Dish>;

@Schema({ timestamps: true })
export class Dish {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  ingredients: string[];

  @Prop()
  method: string;
}

export const DishSchema = SchemaFactory.createForClass(Dish);
