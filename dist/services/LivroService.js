import express from 'express';
var biblioteca = [];
export const LivroService = {
    Listar: () => biblioteca,
    AddLivro: (livro) => {
        biblioteca.push(livro);
        return livro;
    },
    RemoverLivro: (id) => {
        biblioteca = biblioteca.filter(l => id !== l.id);
        return true;
    }
};
//# sourceMappingURL=LivroService.js.map