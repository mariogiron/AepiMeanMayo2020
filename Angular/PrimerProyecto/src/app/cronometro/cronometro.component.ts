import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  @Input('inicio') contador: number;

  // 1 - Defino el nombre y tipo para el OUTPUT
  @Output() cuentaTerminada: EventEmitter<string>;

  constructor() {
    this.contador = 7;
    // 2 - Inicializo el Output
    this.cuentaTerminada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  manejarClick() {
    const interval = setInterval(() => {
      this.contador--;
      if (this.contador === 0) {
        clearInterval(interval);
        // 3 - Emitir el evento
        this.cuentaTerminada.emit('El cronómetro ha finalizado');
      }
    }, 1000);
  }

}
