import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageStorageModule } from './modules/image-storage/image-storage.module';
import { ImageEntity } from './utils/entities/image.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './config/dataSourceOptions';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dataSourceOptions],
    }),
    TypeOrmModule.forRoot(dataSourceOptions()),

    TypeOrmModule.forFeature([ImageEntity]),
    ImageStorageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
