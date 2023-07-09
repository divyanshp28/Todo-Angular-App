import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  // EVENT EMITTER
  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox:EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    //console.log("onClick has been triggered.")
  }
  onCheckboxClick(todo: Todo){
    this.todoCheckbox.emit(todo);

  }

}
