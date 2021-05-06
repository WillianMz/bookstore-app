import { Autor } from './../../autores/autor.model';
import { LivroService } from './../livro.service';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlDirective } from '@angular/forms';
import { AutorService } from 'src/app/autores/autor.service';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.scss'],
})
export class LivroFormComponent implements OnInit {


  livroID: number;
  livroForm: FormGroup;
  autores: Autor[];

  constructor(
    private toast: ToastController,
    private activatedRoute: ActivatedRoute,
    private livroService: LivroService,
    private autorService: AutorService,
    private router: Router
  ) {

    let livro = {
      id: null,
      titulo: '',
      isbn: null,
      num_pag: null,
      preco: null,
      autorId: null,
      autor: '',
      url_img: ''
    };
    this.initializaFormulario(livro);

  }

  ngOnInit() {
    this.listarAutores();

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if(id){
      this.livroID = parseInt(id);
      this.livroService.getLivro(this.livroID).subscribe(
        (liv) => {
          console.log(liv);
          this.initializaFormulario(liv);
        }
      );
    }

  }

  listarAutores(){
    this.autorService.getAutores().subscribe(
      (autoresResult) => {
        this.autores = autoresResult;
        console.log(autoresResult);
      },
      (erro) => {
        console.log(erro);
      }
    )
  }

  private exibirAlerta(mensagem: string, tempExibicao: number, cor: string){
    this.toast.create({
      message: mensagem,
      duration: tempExibicao,
      keyboardClose: true,
      color: cor
    }).then(t => t.present());
  }


  salvar(){
    const newLivro: Livro = {...this.livroForm.value, id: this.livroID}
    console.log(newLivro);
    this.livroService.salvar(newLivro).subscribe(
      () => this.router.navigate(['livros']),
      (erro) => {
        console.log(erro);
        this.exibirAlerta('Erro ao salvar livro',5000,'danger');
      }
    )
  }


  initializaFormulario(livro: Livro) {
    this.livroForm = new FormGroup({
      titulo: new FormControl(livro.titulo, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ]),
      isbn: new FormControl(livro.isbn, [
        Validators.required,
        Validators.minLength(10)
      ]),
      num_pag: new FormControl(livro.num_pag, [
        Validators.required,
        Validators.minLength(1)
      ]),
      preco: new FormControl(livro.preco, [
        Validators.required,
        Validators.minLength(2)
      ]),
      autor: new FormControl(livro.autor, [
        Validators.required
      ]),
      url_img: new FormControl(livro.url_img,[
        Validators.required
      ])
    })
  }


  get titulo() {
    return this.livroForm.get('titulo');
  }

  get isbn(){
    return this.livroForm.get('isbn');
  }

  get num_pag(){
    return this.livroForm.get('num_pag');
  }

  get preco(){
    return this.livroForm.get('preco');
  }

  get url_img(){
    return this.livroForm.get('url_img');
  }

  get autor(){
    return this.livroForm.get('autor');
  }
}
