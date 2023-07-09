import { Component } from '@angular/core';
import { Todo } from '../../Todo';

// import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem:string;
  todos:Todo[];
  i!:number;
  // constructor(){
  //   this.localItem = localStorage.getItem("todos") || '';
  //   if(this.localItem == null){
  //     this.todos = [  ]
  //   }
  //   else{
  //     // console.log(Todo)
  //     // this.todos = JSON.parse(this.localItem);
  //     this.todos = JSON.parse(this.localItem);
  //   }
  //  }
  constructor() {
    this.localItem = localStorage.getItem("todos") || '';
    if (this.localItem == null) {
      this.todos = [];
    } else {
      try {
        this.todos = JSON.parse(this.localItem);
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        this.todos = [];
      }
    }
  }
  
  deleteTodo(todo:Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    //SAVING TODOS IN LOCAL STORAGE
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  // addTodo(todo: Todo) { 
  //   console.log(todo);
  //   this.todos.push(todo)
  // }
  addTodo(todo: Todo) {
    //console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(todo : Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
