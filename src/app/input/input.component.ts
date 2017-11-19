import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <input [value]="title"
         (keyup.enter)="changeTitle(inputElement)"
         #inputElement>
  <button class="btn" (click)="changeTitle(inputElement.value)">
    Save
  </button>
  <p>The title is: {{ title }}</p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  title: String = '';
  constructor() { }

  ngOnInit() {
  }
  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}
