import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nuevaTarea: Tarea;

  @Output() tareaEnviada: EventEmitter<Tarea>;

  constructor() {
    this.nuevaTarea = new Tarea('', '');
    this.tareaEnviada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick() {
    console.log(this.nuevaTarea);
    this.tareaEnviada.emit(this.nuevaTarea);
    this.nuevaTarea = new Tarea('', '');
  }

}
