import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { dataSource } from './config/dataSourceOptions';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get(ConfigService);
  const allowedOrigins: string[] = configService
    .get('ALLOWED_ORIGIN')
    .split(',');
  const PORT: string = configService.get('PORT');

  await dataSource.initialize();

  app.set('trust proxy', 'loopback');
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: allowedOrigins,
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Access-Control-Allow-Origin',
      'authorization',
    ],
    credentials: true,
  });

  // Set the logging level to "verbose"
  const logger = new Logger();
  app.useLogger(logger);

  // Enable global validation
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT);
  // Start the application
  logger.log(`Application stared on port ${PORT}`);
}
bootstrap();
