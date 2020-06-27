import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes: any[];

  currentDate: Date;

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {
    this.currentDate = new Date();
  }

  ngOnInit(): void {
    this.clientesService.getAll()
      .then(response => {
        if (response['error']) {
          this.router.navigate(['/login']);
        } else {
          this.clientes = response;
        }
      })
      .catch(error => console.log(error));
  }

}
