import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as actions from '../todo.actions'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  chkCompletado!: FormControl;
  txtEditar!: FormControl;

  editando: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtEditar = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }))
    })
  }

  edit() {
    this.editando = true;
    this.txtEditar.setValue(this.todo.texto)
    setTimeout(()=>{
      this.txtInputFisico.nativeElement.select();
    }, 1)
  }

  terminarEdicion() {
    this.editando = false;

    if(this.txtEditar.invalid) {return;}
    if(this.txtEditar.value === this.todo.texto) {return;}

    this.store.dispatch(
      actions.editar({
        id: this.todo.id,
        texto: this.txtEditar.value
      })
    )
  };

  borrar() {
    this.store.dispatch(actions.borrar({id: this.todo.id}))
  }

}
