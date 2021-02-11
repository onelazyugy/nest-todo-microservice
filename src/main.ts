import { NestFactory } from '@nestjs/core';
import { AllExceptionsFilter } from './all-exceptions-filter';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter()); // global exceptions filter
  app.useGlobalInterceptors(new LoggingInterceptor()); // global logging interceptor 
  await app.listen(3000);
}
bootstrap();
