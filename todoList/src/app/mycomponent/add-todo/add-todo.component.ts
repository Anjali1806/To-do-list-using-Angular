import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() todoAdd: EventEmitter<Todos> = new EventEmitter();
  title:string
  desc:string
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo = {
     sno:8,
     title:this.title,
     desc:this.desc,
     active:true
    }
    this.todoAdd.emit(todo);
  }

}
