import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ExtraerDataService {

  constructor(
    private http: HttpClient,
  ) { }

  getListado(){
    return this.http.get(`${URL}/datos/datos/infinito`)
  }
}
