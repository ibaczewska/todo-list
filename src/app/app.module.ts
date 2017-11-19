import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { TodoListStorageService } from './todo-list-storage.service';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ItemComponent } from './item/item.component';
import { ListMenagerComponent } from './list-menager/list-menager.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ItemComponent,
    ListMenagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoListService, TodoListStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
