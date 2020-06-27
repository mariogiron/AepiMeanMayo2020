import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario-clientes.component.html',
  styleUrls: ['./formulario-clientes.component.css']
})
export class FormularioClientesComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      email: new FormControl(),
      age: new FormControl(),
      active: new FormControl(),
      zip: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this.clientesService.create(this.formulario.value);
    this.router.navigate(['/clientes']);
  }

}
