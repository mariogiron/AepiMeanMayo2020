import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() productos: any[];

  constructor() { }

  ngOnInit(): void {
  }

  calcularTotal() {
    let total = 0;
    for (let prod of this.productos) {
      total += prod.precio;
    }
    return total;
  }

}
