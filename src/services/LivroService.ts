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
        for (var i = 0; i < biblioteca.length; i++) {
            if (id == biblioteca[i]?.id) {
                const livroEncontrado = biblioteca[i];

                if (livroEncontrado) {
                    livroEncontrado.nome = livro.nome;
                    livroEncontrado.descricao = livro.descricao;

                    biblioteca[i] = livroEncontrado;
                }
                
                return biblioteca[i];
            }
        }
        return false;
    }

}