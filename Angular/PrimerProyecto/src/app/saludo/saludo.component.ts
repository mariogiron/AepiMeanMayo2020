import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  nombre: string;
  numero: number;
  identificador: string;

  constructor() {
    this.identificador = 'parrafoCentral';
    this.nombre = 'Mario';
    setTimeout(() => {
      this.nombre = 'Ramiro';
      this.identificador = 'parrafoIdCambiado';
    }, 3000);

    this.numero = 10;
    setInterval(() => {
      this.numero--;
    }, 1000);
  }

  ngOnInit(): void {
  }

  mostrarCadena(): string {
    return 'Esta es mi cadena';
  }

  manejarClick(): void {
    console.log('Se ha pulsado el botón');
  }

  manejarInput($event): void {
    this.nombre = $event.target.value;
  }

  manejarChange($event): void {
    console.log($event.target.value);
  }

}
