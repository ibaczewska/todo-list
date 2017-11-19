import { Injectable } from '@angular/core';

const storageName = 'aah_todo_list';

@Injectable()
export class TodoListStorageService {

  private todoList;

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem(storageName));
  }

  // get items
  get() {
    return[...this.todoList];
  }

  // add a new item
  post(item) {
    this.todoList.push(item);
    return this.get();
  }

  // update an item
  put(item, changes) {}

  // remove an item
  destroy(item) {}

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));

    return this.get();
  }
}
