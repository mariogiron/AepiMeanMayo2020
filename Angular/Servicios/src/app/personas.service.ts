import { Injectable } from '@angular/core';
import { Persona } from './models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  arrPersonas: Persona[];

  constructor() {
    this.arrPersonas = [
      { nombre: 'Mario', apellidos: 'Girón', edad: 34, email: 'm@mario.com', activo: true },
      { nombre: 'Rosa', apellidos: 'García', edad: 12, email: 'm@mario.com', activo: false },
      { nombre: 'Lucía', apellidos: 'González', edad: 56, email: 'm@mario.com', activo: true },
      { nombre: 'Jose', apellidos: 'Pérez', edad: 23, email: 'm@mario.com', activo: false }
    ]
  }

  getAll(): Persona[] {
    return this.arrPersonas;
  }

  getAllPromise(): Promise<Persona[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPersonas);
    });
  }

  getActivos(): Promise<Persona[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = [];
      for (let persona of this.arrPersonas) {
        if (persona.activo) {
          arrFiltrado.push(persona);
        }
      }
      resolve(arrFiltrado);
    });
  }

  getActivosV2(): Promise<Persona[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPersonas.filter(persona => persona.activo));
    });
  }

  create(newPersona: Persona): Promise<Persona[]> {
    return new Promise((resolve, reject) => {
      this.arrPersonas.push(newPersona);
      resolve(this.arrPersonas);
    });
  }

}
