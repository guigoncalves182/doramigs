import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Dish } from 'src/modules/dishes/schemas/dish.schema';

export type EpisodeDocument = HydratedDocument<Episode>;

@Schema({ timestamps: true })
export class Episode {
  @Prop({ required: true })
  title: string;

  @Prop()
  durationInMinutes: number;

  @Prop()
  originalRelease: string;

  @Prop()
  synopsis: string;

  @Prop({ required: true })
  season: number;

  @Prop({ required: true })
  index: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Dish.name }] })
  dishes: Dish[];
}

export const EpisodeSchema = SchemaFactory.createForClass(Episode);
