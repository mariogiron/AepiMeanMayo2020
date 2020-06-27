import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';
import { LibrosService } from '../libros.service';
import { Libro } from '../models/libro.model';

@Component({
  selector: 'app-detalle-escritor',
  templateUrl: './detalle-escritor.component.html',
  styleUrls: ['./detalle-escritor.component.css']
})
export class DetalleEscritorComponent implements OnInit {

  escritor: Escritor;
  libros: Libro[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private escritoresService: EscritoresService,
    private librosService: LibrosService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.escritor = await this.escritoresService.getById(params.escritorId);
      this.libros = await this.librosService.getByEscritorId(params.escritorId);
    });
  }

}
