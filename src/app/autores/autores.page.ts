import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController,  } from '@ionic/angular';
import { Autor } from './autor.model';
import { AutorService } from './autor.service';


@Component({
  selector: 'app-autores',
  templateUrl: './autores.page.html',
  styleUrls: ['./autores.page.scss'],
})
export class AutoresPage implements OnInit {
  autores: Autor[];

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private autorService: AutorService
  ) { }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.listar();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  ngOnInit() {}

  listar() {
    this.autorService
      .getAutores()
      .subscribe(
        (dados) => {
          this.autores = dados;
        }, 
        (erro) => {
          console.error(erro);
        }
      );
  }

  confirmarExclusao(autor: Autor) {
    this.alertController.create({
      header: 'Confirmação de exclusão', 
      message: `Deseja excluir o autor ${autor.nome}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => this.excluir(autor)
        },
        {
          text: 'Não',
        }
      ]
    }).then(alerta => alerta.present());
  }

  private excluir(autor: Autor) {
    this.autorService
      .excluir(autor.id)
      .subscribe(
        () => this.listar(),
        (erro) => {
          console.error(erro);
          this.toastController.create({
            message: `Não foi possível excluir o autor ${autor.nome}`,
            duration: 5000,
            keyboardClose: true,
            color: 'danger'
          }).then(t => t.present());
        }
      );
  }
}
