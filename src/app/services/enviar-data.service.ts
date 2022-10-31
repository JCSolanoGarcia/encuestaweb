import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class EnviarDataService {

  constructor(
    private http: HttpClient,
  ) { }

  postListado(data: any){
    console.log(data);    
    return this.http.post(`${URL}/`, data)
  }
}
