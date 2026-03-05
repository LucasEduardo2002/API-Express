import express from 'express';
import type { Livro } from '../models/LivroModel.js';


var biblioteca : Livro[] = [];

export const LivroService = {

    Listar : () => biblioteca,

    AddLivro : (livro : Livro) =>{

        for(var i = 0; i < biblioteca.length; i++){
            const idcheck = biblioteca[i]?.id
            if(idcheck == livro.id){
                return false;
            }
        }
        
        biblioteca.push(livro);
        return livro;
    }, 
    RemoverLivro : (id : number) =>{
        biblioteca = biblioteca.filter(l => id !== l.id);
        return true;
    }
    
}