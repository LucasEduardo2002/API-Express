import express from 'express';
import type { Livro } from '../models/LivroModel.js';


var biblioteca : Livro[] = [];

export const LivroService = {

    Listar : () => biblioteca,

    AddLivro : (livro : Livro) =>{
        biblioteca.push(livro);
        return livro;
    }, 
    RemoverLivro : (id : number) =>{
        biblioteca = biblioteca.filter(l => id !== l.id);
        return true;
    }
    
}