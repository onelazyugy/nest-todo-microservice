import { HttpService, Injectable } from '@nestjs/common';
import { from, Observable, throwError, UnaryFunction } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { TodoDto } from './dto/todo.dto';

@Injectable()
export class TodoService {
    constructor(private httpClient: HttpService){}

    fetchTodos(): TodoDto[] {
        const $todos: any = this.httpClient.get('https://jsonplaceholder.typicode.com/todos').pipe(
            map(r => r.data)
        );
        $todos.subscribe(r => {
            console.log("data: ", r);
        })
        return $todos;
    }


}
