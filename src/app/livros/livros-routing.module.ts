import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivroFormComponent } from './livro-form/livro-form.component';

import { LivrosPage } from './livros.page';

const routes: Routes = [
  { path: '', component: LivrosPage },
  { path: 'novo', component: LivroFormComponent },
  { path: 'editar/:id', component: LivroFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosPageRoutingModule {}
