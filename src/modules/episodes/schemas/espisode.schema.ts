import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EpisodeDocument = HydratedDocument<Episode>;

@Schema()
export class Episode {
  @Prop({ required: true })
  name: string;

  @Prop()
  duration: number;

  @Prop()
  originalRelease: string;
}

export const EpisodeSchema = SchemaFactory.createForClass(Episode);
