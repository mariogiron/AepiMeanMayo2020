import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  texto: string;
  persona: any;

  constructor() {
    this.texto = 'Texto inicial';
    this.persona = {};
  }

  ngOnInit(): void {
  }

  manejarClick() {
    this.texto = 'Otro valor diferente';
  }

  enviarFormulario() {
    console.log(this.persona);
  }

}
