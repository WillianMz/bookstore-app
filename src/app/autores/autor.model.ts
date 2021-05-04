import { Genero } from "./genero.enum";

export class Autor {
    id?: number;
    nome: string;
    dataNascimento: Date;
    genero: Genero; 
}
