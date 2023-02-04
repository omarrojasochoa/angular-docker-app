import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Data } from '../interface/dataSesion';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  private readonly API = 'https://jsonplaceholder.typicode.com/users';
  constructor(private readonly http: HttpClient) {}

  getData(): Observable<Data[]> {
    //console.log(this.http.get<Data[]>(this.API));
    return this.http.get<Data[]>(this.API);
  }
}
