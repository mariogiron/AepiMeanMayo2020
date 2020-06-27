import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  personajes: any[];
  paginaActual: number;
  numPaginas: number;

  constructor(private apiService: ApiService) {
    this.paginaActual = 1;
    this.numPaginas = 0;
  }

  async ngOnInit() {
    // this.apiService.getPersonajes()
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => console.log(error));

    const response = await this.apiService.getPersonajes();
    this.personajes = response['results'];
    this.numPaginas = response['info']['pages'];
  }

  async cambiarPagina(pSiguiente) {
    if (pSiguiente) this.paginaActual++;
    else this.paginaActual--;

    const response = await this.apiService.getPersonajes(this.paginaActual);
    this.personajes = response['results'];
  }

}
