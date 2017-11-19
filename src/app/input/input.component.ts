import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <p>
      input works!
    </p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
