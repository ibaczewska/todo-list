import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
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
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'To do List';
 todoList = [
   {title: 'do shopping'},
   {title: 'cleaning'},
  ];
  addItem(title: string): void {
    this.todoList.push({title});
  }
}
