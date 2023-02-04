import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SumaService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  sumar(num1: number, num2: number): Observable<any> {
    return this.http.get<number>(`${this.apiUrl}?num1=${num1}&num2=${num2}`);
  }
}
