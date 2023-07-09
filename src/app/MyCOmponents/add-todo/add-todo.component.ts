import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title!:string ;
  desc!:string ;

  // @Output() todoAdd:EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() todoAdd:EventEmitter<Todo> = new EventEmitter();
  // todoAdd: any;

  constructor() { }

  onSubmit() {
    const todo = {
      sno: 1,
      title:this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
    // this.title = '';
    // this.desc = '';
  }
}