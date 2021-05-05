import { Livro } from './livro.model';
import { LivroService } from './livro.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.page.html',
  styleUrls: ['./livros.page.scss'],
})
export class LivrosPage implements OnInit {
  livros: Livro[];

  constructor(
    private alertController: AlertController,
    private toast: ToastController,
    private livroService: LivroService
  ) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.livroService.getAll().subscribe(
      (dados) => {
        console.log(dados);
        this.livros = dados;
      },
      (erro) => {
        console.error(erro);
      }
    )
  }

  alertExcluir(livro: Livro){
    this.alertController.create({
      header: 'Atenção',
      message: `Confirma a exclusão do livro ${livro.titulo}`,
      buttons:[
        {
          text:'Sim',
          handler: () => this.excluir(livro.id)
        },
        {
          text: 'Não'
        }
      ]
    }).then(alert => alert.present());
  }

  private exibirAlerta(mensagem: string, tempExibicao: number, cor: string){
    this.toast.create({
      message: mensagem,
      duration: tempExibicao,
      keyboardClose: true,
      color: cor
    }).then(t => t.present());
  }

  private excluir(id: number){
    this.livroService.delete(id).subscribe(
      (result) => {
        this.exibirAlerta('Livro excluído',5000,'success');
        this.listar()
      },
      (erro) => {
        this.exibirAlerta('Não foi possível excluír o livro', 5000, 'danger');
      }
    )
  }

}
