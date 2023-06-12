import { createReducer, on } from "@ngrx/store";
import * as action from './todo.actions'
import { Todo } from './models/todo.model'

export const estadoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Ironman'),
    new Todo('Robar escudo del Capitán America')
];

export const todoReducer = createReducer(estadoInicial,
    on(action.crear, (state, { texto }) => [...state, new Todo(texto)]),
    on(action.toggleAll, (state, { completado }) => {
      return state.map( todo => {
        return {
          ...todo,
          completado: completado
        }
      } )
    }),
    on(action.limpiarAll, (state) => {
      return state.filter(todo => !todo.completado)
    }),
    on(action.toggle, (state, { id }) => {
        return state.map( todo => {
          if(todo.id === id) {
            return {
              ...todo,
              completado: !todo.completado
            }
          } else {
            return todo;
          };
        } );
    }),
    on(action.editar, (state, { id, texto }) => {
      return state.map( todo => {
        if(todo.id === id) {
          return {
            ...todo,
            texto: texto
          }
        } else {
          return todo;
        };
      } );
    }),
    on(action.borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
);
