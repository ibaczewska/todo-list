import { Component, OnInit } from '@angular/core';

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
  todoList = [
    {title: 'do shopping'},
    {title: 'cleaning'},
   ];
   addItem(title: string): void {
     this.todoList.push({title});
   }
  constructor() { }

  ngOnInit() {
  }

}


