import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/users';
  }

  registro(pFormValue) {
    return this.httpClient.post(`${this.baseUrl}/register`, pFormValue).toPromise();
  }

  login(pFormValue) {
    return this.httpClient.post(`${this.baseUrl}/login`, pFormValue).toPromise();
  }

}
