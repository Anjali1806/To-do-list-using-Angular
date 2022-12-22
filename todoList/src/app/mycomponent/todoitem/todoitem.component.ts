import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
@Input() todo:Todos; 
@Input() i:number;
@Output() todoDelete: EventEmitter<Todos> = new EventEmitter();
@Output() todoCheckbox: EventEmitter<Todos> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo:Todos){
    this.todoDelete.emit(todo);  
      console.log("onClick has been triggered!!!");
  }
  onCheckboxClick(todo: Todos){
    this.todoCheckbox.emit(todo);  

  }
}
