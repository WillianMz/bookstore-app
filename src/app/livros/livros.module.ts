import { LivroFormComponent } from './livro-form/livro-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivrosPageRoutingModule } from './livros-routing.module';

import { LivrosPage } from './livros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LivrosPageRoutingModule
  ],
  declarations: [LivrosPage, LivroFormComponent]
})
export class LivrosPageModule {}
