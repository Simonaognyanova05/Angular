import { Injectable, Injector } from '@angular/core';
import { Todo } from './components/todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private injector: Injector) {

   }
}
