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
}

export const EpisodeSchema = SchemaFactory.createForClass(Episode);
