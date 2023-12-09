import { DataSource, DataSourceOptions } from 'typeorm';

import * as dotenv from 'dotenv';
import { ImageEntity } from 'src/utils/entities/image.entity';
dotenv.config();

export const dataSourceOptions = (): DataSourceOptions => {
  return {
    type: 'postgres',
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT),
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    entities: [ImageEntity],
    synchronize: true,
    extra: {
      timezone: 'UTC', // Set the appropriate timezone here
    },
  };
};

export const dataSource = new DataSource(dataSourceOptions());
