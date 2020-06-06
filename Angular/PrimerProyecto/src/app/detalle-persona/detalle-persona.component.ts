import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrls: ['./detalle-persona.component.css']
})
export class DetallePersonaComponent implements OnInit {

  @Input() nombre: string;
  @Input() apellidos: string;
  @Input() edad: number;

  constructor() {
    this.nombre = 'Mario';
    this.apellidos = 'Girón';
    this.edad = 36;
  }

  ngOnInit(): void {
  }

}