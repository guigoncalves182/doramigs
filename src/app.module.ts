import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { DoramasModule } from './modules/doramas/doramas.module';
import { EpisodeModule } from './modules/episodes/episodes.module';
import { DishesModule } from './modules/dishes/dishes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.CONN_STRING),
    DoramasModule,
    EpisodeModule,
    DishesModule,
  ],
})
export class AppModule {}
