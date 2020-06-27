import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrComida: any[];
  arrBebida: any[];

  productosSeleccionados: any[];

  constructor() {
    this.arrComida = [
      { nombre: 'Cocido', imagen: '', precio: 23 },
      { nombre: 'Paella', imagen: '', precio: 12 },
    ];

    this.arrBebida = [
      { nombre: 'Fanta', imagen: '', precio: 1 },
      { nombre: 'Vino', imagen: '', precio: 2 },
    ]

    this.productosSeleccionados = [];
  }

  onProductoSeleccionado($event) {
    this.productosSeleccionados.push($event);
    console.log(this.productosSeleccionados);
  }

}
