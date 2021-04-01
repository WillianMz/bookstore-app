import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from '../autor.model';
import { AutorService } from '../autor.service';
import { Genero } from '../genero.enum';

@Component({
  selector: 'app-autores-cadastro',
  templateUrl: './autores-cadastro.component.html',
  styleUrls: ['./autores-cadastro.component.scss'],
})
export class AutoresCadastroComponent implements OnInit {

  autorId: number;
  autoresForm: FormGroup;
  autor: Autor;
  mesesAbreviados = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
  meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private autorService: AutorService,    
    private router: Router
  ) 
  {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    let autor;
    
    if(id){
      autor =this.autorService.getAutor(id);
      this.autorId = id;
    }
    else{
      autor = {
        id: null,
        nome: '',
        dataNascimento: null
      }
    }


    this.autoresForm = new FormGroup({
      nome: new FormControl(autor.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
      dataNascimento: new FormControl(autor.dataNascimento),
      genero: new FormControl(autor.genero,[Validators.required])
    })
  }

  ngOnInit() {}

  salvar() {
    const autor = {...this.autoresForm.value, id: this.autorId}
    this.autorService.salvar(autor);
    this.router.navigate(['autores']);
  }

  get nome(){
    return this.autoresForm.get('nome');
  }
}