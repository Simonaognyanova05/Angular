import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Todo } from './components/todo.component';
import { TodoItem } from './components/todo-items/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    Todo,
    TodoItem
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
