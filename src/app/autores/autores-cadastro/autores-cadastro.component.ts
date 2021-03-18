import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Autor } from '../autor.model';
import { AutorService } from '../autor.service';
import { Genero } from '../genero.enum';

@Component({
  selector: 'app-autores-cadastro',
  templateUrl: './autores-cadastro.component.html',
  styleUrls: ['./autores-cadastro.component.scss'],
})
export class AutoresCadastroComponent implements OnInit {

  autor: Autor;

  constructor(
    private activedRoute: ActivatedRoute,
    private autorService: AutorService
  ) { 
    const id = parseInt(this.activedRoute.snapshot.paramMap.get('id'));

    if(id){
      this.autor = this.autorService.getAutor(id);
    }
    else{
      this.autor = {
        id: null,
        nome: '',
        dataNascimento: null,
        genero: Genero.FEMININO
      }
    }

    console.log(this.autor);
  }

  ngOnInit() {}

}
