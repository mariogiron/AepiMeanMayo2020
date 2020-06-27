import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usuariosService: UsuariosService) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this.usuariosService.registro(this.formulario.value);
    console.log(response);
  }

}
