import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { StorageConfig } from 'config/storage.config';
import { AppModule } from './app.module';
import { Photo } from './entities/photo.entity';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(StorageConfig.photo.destinacion, {
    prefix: StorageConfig.photo.urlPrefix,
    maxAge: StorageConfig.photo.maxAge,
    index: false,
  });

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  await app.listen(3000);
}
bootstrap();
