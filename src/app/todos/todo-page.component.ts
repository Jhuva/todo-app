import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as action from './todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completado: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {}

  toggleAll() {
    this.completado = !this.completado;
    this.store.dispatch(action.toggleAll({completado: this.completado}));
  }

}
