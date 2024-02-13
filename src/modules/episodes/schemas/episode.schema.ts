import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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
}

export const EpisodeSchema = SchemaFactory.createForClass(Episode);
