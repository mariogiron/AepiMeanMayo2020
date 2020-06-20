import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  @Input() tareas: Tarea[];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(pTarea: Tarea) {
    pTarea.completa = !pTarea.completa;
  }

}
