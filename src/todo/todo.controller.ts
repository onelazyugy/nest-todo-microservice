import { Controller, Get, UseFilters, UseInterceptors } from '@nestjs/common';
import { AllExceptionsFilter } from 'src/all-exceptions-filter';
import { LoggingInterceptor } from 'src/logging.interceptor';
import { TodoDto } from './dto/todo.dto';
import { TodoService } from './todo.service';

@Controller()
export class TodoController {
    constructor(private todoService: TodoService) {}

    @Get('/health')
    health(): string {
        return 'up!';
    }

    @Get('/api/todo')
    fetchTodos(): TodoDto[] {
        const todos: TodoDto[] = this.todoService.fetchTodos();
        return todos;
    }

    @Get('/api/exception')
    throwException() {
        this.todoService.throwException()
    }

}
