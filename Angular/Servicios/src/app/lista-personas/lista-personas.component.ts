import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  personas: Persona[];

  constructor(private personasService: PersonasService) { }

  async ngOnInit() {
    // Opción sin Promesas
    // this.personas = this.personasService.getAll();

    // Opción Promesas then/catch
    // this.personasService.getAllPromise()
    //   .then(arrPersonas => this.personas = arrPersonas)
    //   .catch(error => console.log(error));

    // Opción Promesas async/await
    this.personas = await this.personasService.getAllPromise();
  }

  async onClickActivas() {
    // Promesa con then/catch
    // this.personasService.getActivos()
    //   .then(arrFiltrado => this.personas = arrFiltrado)
    //   .catch(err => console.log(err));

    // Promesa con async/await
    this.personas = await this.personasService.getActivosV2();

  }

  async onClickTodas() {
    this.personas = await this.personasService.getAllPromise();
  }

  async onClickAgregar() {
    let p = new Persona();
    p.nombre = 'Laura';
    p.apellidos = 'Martínez';
    p.edad = 34;
    p.email = 'laura@gmail.com';
    p.activo = false;

    this.personas = await this.personasService.create(p);
  }

}
