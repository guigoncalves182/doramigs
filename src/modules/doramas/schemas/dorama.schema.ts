import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Episode } from 'src/modules/episodes/schemas/espisode.schema';

export type DoramaDocument = HydratedDocument<Dorama>;

@Schema()
export class Dorama {
  @Prop({ required: true })
  name: string;

  @Prop({ default: true })
  active: boolean;

  @Prop()
  county: string;

  @Prop()
  episodes: Episode[];
}

export const DoramaSchema = SchemaFactory.createForClass(Dorama);
