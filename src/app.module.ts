import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { DoramasModule } from './modules/doramas/doramas.module';
import { EpisodeModule } from './modules/episodes/episodes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.CONN_STRING),
    DoramasModule,
    EpisodeModule,
  ],
})
export class AppModule {}
