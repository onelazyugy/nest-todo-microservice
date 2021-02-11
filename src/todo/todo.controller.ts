import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TodoDto } from './dto/todo.dto';
import { TodoService } from './todo.service';

@Controller('/api')
export class TodoController {
    constructor(private todoService: TodoService) {}

    @Get('/health')
    health(): string {
        return 'up!';
    }

    @Get('/todo')
    fetchTodos(): Observable<TodoDto> {
        return this.todoService.fetchTodos();
    }

}