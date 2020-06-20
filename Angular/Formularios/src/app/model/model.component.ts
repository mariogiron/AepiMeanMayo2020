/**
 * 
 * TODO: 
 * - Validar la password repetida (validaciones generales del formulario)
 * - Observar los cambios sobre un campo en concreto
 * 
 */

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      edad: new FormControl('', [
        this.edadValidator
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/)
      ]),
      dni: new FormControl('', [
        this.dniValidator
      ]),
      password: new FormControl(),
      repite_password: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

  edadValidator(control) {
    const value = control.value;
    const minEdad = 18;
    const maxEdad = 65;

    if (value >= minEdad && value <= maxEdad) {
      return null;
    } else {
      return { edadvalidator: { min: minEdad, max: maxEdad } };
    }
  }

  dniValidator(control) {
    const dni = control.value;

    const expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test(dni) == true) {
      let numero = dni.substr(0, dni.length - 1);
      let letr = dni.substr(dni.length - 1, 1);
      numero = numero % 23;
      let letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
      letra = letra.substring(numero, numero + 1);
      if (letra != letr.toUpperCase()) {
        return { dnivalidator: 'La letra no se corresponde con el número del DNI' };
      } else {
        return null;
      }
    } else {
      return { dnivalidator: 'El formato del DNI es incorrecto' };
    }
  }

}
