import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  app.enableCors({
    origin: 'http://localhost:3000', // Frontend URL
    credentials: true,
  });

  app.setGlobalPrefix('api'); //Set a global prefix for all routes
  const port = process.env.PORT ?? 3001;
  await app.listen(port);
  Logger.log(`API is running on port ${port}`);
}
bootstrap();
