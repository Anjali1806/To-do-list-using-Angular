import { Component, OnInit  } from '@angular/core';
import { Todos } from '../../Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todo: Todos[];
  localItem: string | null;
  constructor() { 
    this.localItem = localStorage.getItem("todo");
    if(this.localItem == null){
    this.todo = [];
    }else{
      this.todo= JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }

 deleteTodo(todo:Todos){
 console.log(todo);
 const index = this.todo.indexOf(todo);
 this.todo.splice(index,1);
 localStorage.setItem("todo",JSON.stringify(this.todo));//to store deleted items in local storage;
 }
addTodo(todo:Todos){
 console.log(todo);
 this.todo.push(todo); 
 localStorage.setItem("todo",JSON.stringify(this.todo));//to store added items in local storage;
 }
 toggleTodo(todo:Todos){
  const index = this.todo.indexOf(todo);
 this.todo[index].active=!this.todo[index].active; 
  localStorage.setItem("todo",JSON.stringify(this.todo));//to store done items in local storage;
  }
 
}
