import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private apiUrl = 'https://api.itbook.store/1.0/';

  private http = inject(HttpClient)

  getLibros(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getLibro(id: number): Observable<any> {
    const url = `https://stephen-king-api.onrender.com/api/book/${id}`;
    return this.http.get<any>(url);
  }
}