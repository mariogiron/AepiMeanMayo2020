import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  propiedadesParrafo: any;

  constructor() {
    this.propiedadesParrafo = {
      fontSize: '14px',
      backgroundColor: 'tomato'
    };
  }

  cambiarColor(pColor) {
    this.propiedadesParrafo.backgroundColor = pColor;
  }

  cambiarFuente($event) {
    console.log($event.target.value);
    this.propiedadesParrafo.fontSize = $event.target.value + 'px';
  }

}
