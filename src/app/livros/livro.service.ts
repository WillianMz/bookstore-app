import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from './livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private url = 'http://localhost:3000/livros';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Livro[]> {
    let response = this.http.get<Livro[]>(this.url);
    return response;
  }

  getLivro(id: number): Observable<Livro>{
    let response = this.http.get<Livro>(`${this.url}/${id}`);
    return response;
  }

  create(livro: Livro){
    return this.http.post(this.url, livro);
  }

  update(livro: Livro){
    return this.http.put(`${this.url}/${livro.id}`, livro);
  }

  delete(id: number): Observable<Object>{
    return this.http.delete(`${this.url}/${id}`);
  }

}
