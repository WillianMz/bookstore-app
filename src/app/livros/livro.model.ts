import { Autor } from './../autores/autor.model';

export class Livro {
  id?: number;
  titulo: string;
  isbn: number;
  num_pag: number;
  preco: number;
  autor_id: number;
  autor: Autor;
  url_img: string;
}
