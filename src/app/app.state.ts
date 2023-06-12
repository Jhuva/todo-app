import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";
import { filtrosValidos } from './filtro/filtro.actions';
import { filtroReducer } from "./filtro/filtro.reducer";

export interface AppState {
    todos: Todo[],
    filtro: filtrosValidos
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
}

