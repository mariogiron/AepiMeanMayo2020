import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {

  escritores: Escritor[];

  constructor(private escritoresService: EscritoresService) { }

  ngOnInit(): void {
    this.escritoresService.getAll()
      .then(arrEscritores => this.escritores = arrEscritores)
      .catch(error => console.log(error));
  }

  async onChange($event) {
    console.log($event.target.value);
    this.escritores = await this.escritoresService.getByPais($event.target.value);
  }

}
