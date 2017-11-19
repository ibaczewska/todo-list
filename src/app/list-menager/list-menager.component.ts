import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-menager',
  template: `
  <h1>
  {{title}}
</h1>
<todo-input (submit)='addItem($event)'></todo-input>
<ul>
  <li *ngFor = "let item of todoList">
   <todo-item [todoItem]='item'></todo-item>
  </li>
</ul>
  `,
  styleUrls: ['./list-menager.component.css']
})
export class ListMenagerComponent implements OnInit {
  title: String = 'To do List';
  todoList = [];
  addItem(item): void {
    this.todoListService.addItem(item);
  }
   constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }
}



