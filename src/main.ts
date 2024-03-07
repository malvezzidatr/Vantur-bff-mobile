import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BffExceptionFilter } from './filter/bffException.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new BffExceptionFilter())
  await app.listen(3001);
}
bootstrap();
