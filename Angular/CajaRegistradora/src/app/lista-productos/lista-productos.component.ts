import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo: string; // Muestra el título
  @Input() productos: any[]; // con un ngFor itero los productos

  @Output() productoSeleccionado: EventEmitter<any>;

  constructor() {
    this.productoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(pProd) {
    console.log(pProd);
    this.productoSeleccionado.emit(pProd);
  }

}
