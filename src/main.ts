import { NestFactory } from '@nestjs/core';
import { AllExceptionsFilter } from './all-exceptions-filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter()); // global exceptions filter
  await app.listen(3000);
}
bootstrap();
