import express from 'express';
var biblioteca = [];
export const LivroService = {
    Listar: () => biblioteca,
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
    RemoverLivro: (id) => {
        biblioteca = biblioteca.filter(l => id !== l.id);
        return true;
    }
};
//# sourceMappingURL=LivroService.js.map