import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/clients';
  }

  getAll(): Promise<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': localStorage.getItem('token')
      })
    }
    return this.httpClient.get<any[]>(this.baseUrl, httpOptions).toPromise();
  }

  create(pFormValue) {
    return this.httpClient.post(this.baseUrl, pFormValue).toPromise();
  }

}
