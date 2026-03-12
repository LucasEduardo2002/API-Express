import express from 'express';
var biblioteca = [];
export const LivroService = {
    Listar: () => biblioteca,
    Buscar: (id) => {
        for (var i = 0; i < biblioteca.length; i++) {
            const idbusca = biblioteca[i]?.id;
            if (idbusca == id) {
                return biblioteca[i];
            }
        }
        return false;
    },
    AddLivro: (livro) => {
        for (var i = 0; i < biblioteca.length; i++) {
            const idcheck = biblioteca[i]?.id;
            if (idcheck == livro.id) {
                return false;
            }
        }
        biblioteca.push(livro);
        return livro;
    },
    Remover: (id) => {
        biblioteca = biblioteca.filter(l => id !== l.id);
        return true;
    },
    Alterar: (id, livro) => {
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
};
//# sourceMappingURL=LivroService.js.map