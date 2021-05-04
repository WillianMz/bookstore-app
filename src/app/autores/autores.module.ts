import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { AutoresPageRoutingModule } from './autores-routing.module';

import { AutoresPage } from './autores.page';
import { AutoresCadastroComponent } from './autores-cadastro/autores-cadastro.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IonicModule,
    AutoresPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AutoresPage, AutoresCadastroComponent]
})
export class AutoresPageModule {}
