import { HttpService, Injectable } from '@nestjs/common';
import { from, Observable, throwError, UnaryFunction } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { TodoDto } from './dto/todo.dto';

@Injectable()
export class TodoService {
    constructor(private httpClient: HttpService){}

    fetchTodos() : Observable<any> {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/todos').pipe(
            tap(r => {
                console.log('GET response: ', r.data),
                switchMap(r => r as Observable<any>)
            })
        );
    }
}
