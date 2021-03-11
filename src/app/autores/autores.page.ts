import { Component, OnInit } from '@angular/core';
import { Autor } from './autor.model';
import { Genero } from './genero.enum';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.page.html',
  styleUrls: ['./autores.page.scss'],
})
export class AutoresPage implements OnInit {

  autores: Autor[];

  constructor() { 
    this.autores = [
      { nome: 'David Flanagen',   dataNascimento: new Date(1980,11,12), genero: Genero.MASCULINO },
      { nome: 'Douglas Cockford', dataNascimento: new Date(1975,9,23), genero: Genero.MASCULINO },
      { nome: 'Martin Flower',    dataNascimento: new Date(1956,12,5), genero: Genero.MASCULINO }
    ];
  }

  ngOnInit() {
  }

}
