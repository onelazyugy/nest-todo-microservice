import { HttpException, HttpService, HttpStatus, Injectable } from '@nestjs/common';
import { log } from 'console';
import { from, Observable, throwError, UnaryFunction } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { TodoDto } from './dto/todo.dto';

@Injectable()
export class TodoService {
    constructor(private httpClient: HttpService){}

    fetchTodos(): TodoDto[] {
        const $todos: any = this.httpClient.get('https://jsonplaceholder.typicode.com/todos').pipe(
            this.todoCallErrorCatch(),
            map(response => response.data)
        );
        $todos.subscribe(r => {
            console.log("data: ", r);
        })
        return $todos;
    }

    /**
     * how to throw exception
     */
    throwException() {
        console.log('processing throwExceptionTest method');
        throw new HttpException('forbidden', HttpStatus.FORBIDDEN)
    }

    private todoCallErrorCatch<T>(): UnaryFunction<Observable<T>, Observable<T>> {
        return catchError((e: Error) => {
          console.error({
            message: 'Error when calling todo api: ' + e.message,
            source: '',
            data: e,
          });
          return throwError(e);
        });
      }


}
