import express from 'express';
import type { Livro } from '../models/LivroModel.js';


var biblioteca: Livro[] = [];

export const LivroService = {

    Listar: () => biblioteca,

    Buscar: (id: number) => {
        for (var i = 0; i < biblioteca.length; i++) {
            const idbusca = biblioteca[i]?.id
            if (idbusca == id) {
                return biblioteca[i];
            }
        }

        return false;
    },

    AddLivro: (livro: Livro) => {

        for (var i = 0; i < biblioteca.length; i++) {
            const idcheck = biblioteca[i]?.id
            if (idcheck == livro.id) {
                return false;
            }
        }

        biblioteca.push(livro);
        return livro;
    },
    Remover: (id: number) => {
        biblioteca = biblioteca.filter(l => id !== l.id);
        return true;
    },

    Alterar: (id: number, livro: Livro) => {

        const LivroEncontrado = biblioteca.find(l => l.id === id)
        if (LivroEncontrado) {
            LivroEncontrado.nome = livro.nome;
            LivroEncontrado.descricao = livro.descricao;

            return LivroEncontrado;
        }else{
            return false;
        }


    }
}



