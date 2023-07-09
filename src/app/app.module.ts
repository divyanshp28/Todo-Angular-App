import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyCOmponents/todos/todos.component';
import { TodoItemComponent } from './MyCOmponents/todo-item/todo-item.component';
import { AddTodoComponent } from './MyCOmponents/add-todo/add-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './MyCOmponents/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
