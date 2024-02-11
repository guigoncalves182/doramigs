import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Episode } from 'src/modules/episodes/schemas/episode.schema';

export type DoramaDocument = HydratedDocument<Dorama>;

@Schema({ timestamps: true })
export class Dorama {
  @Prop({ required: true })
  title: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop()
  rating: number;

  @Prop()
  isOnAir: boolean;

  @Prop()
  originCountry: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Episode' }] })
  episode: Episode[];
}

export const DoramaSchema = SchemaFactory.createForClass(Dorama);
