import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrNumeros: number[];

  constructor() {
    this.arrNumeros = [6, 76, 3];
  }

  manejarCuentaTerminada($event) {
    console.log($event);
  }

}
