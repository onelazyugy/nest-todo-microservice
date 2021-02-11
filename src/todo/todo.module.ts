import { HttpModule, Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  imports: [HttpModule],
  providers: [TodoService]
})
export class TodoModule {}
