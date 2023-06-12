import { createReducer, on } from "@ngrx/store";
import { filtrosValidos } from "./filtro.actions";
import * as actions from './filtro.actions'

export const initialState: filtrosValidos = 'todos';

export const filtroReducer = createReducer<filtrosValidos>(initialState,
  on(actions.setFiltro, (state, { filtro }) => filtro )
);
