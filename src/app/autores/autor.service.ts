import { Injectable } from '@angular/core';
import { Autor } from './autor.model';
import { Genero } from './genero.enum';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private autores:  Autor[];

  constructor() { 
    this.autores = [
      { id: 1, nome: 'David Flanagen',   dataNascimento: new Date(1980,11,12), genero: Genero.MASCULINO },
      { id: 2, nome: 'Douglas Cockford', dataNascimento: new Date(1975,9,23), genero: Genero.MASCULINO },
      { id: 3, nome: 'Martin Flower',    dataNascimento: new Date(1956,12,5), genero: Genero.MASCULINO }
    ];
  }

  getAutores(){
    return this.autores;
  }

  excluir(id: number){
    this.autores = this.autores.filter(a => a.id !== id);
  }

  getAutor(id: number): Autor{
    return this.autores.find(a => a.id == id);
  }

  private adicionar(autor: Autor){
    autor.id = parseInt((Math.random() * 1000).toFixed());
    this.autores.push(autor);
  }

  private atualizar(autor: Autor){
    this.autores.forEach((a, i) => {
      if(a.id === autor.id){
        this.autores[i] = autor;
      }
    })
  }

  salvar(autor: Autor){
    if(autor.id){
      this.atualizar(autor);
    }
    else{
      this.adicionar(autor);
    }
  }

}
