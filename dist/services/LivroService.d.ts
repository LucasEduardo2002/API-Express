import type { Livro } from '../models/LivroModel.js';
export declare const LivroService: {
    Listar: () => Livro[];
    Buscar: (id: number) => false | Livro | undefined;
    AddLivro: (livro: Livro) => false | Livro;
    Remover: (id: number) => boolean;
    Alterar: (id: number, livro: Livro) => false | Livro;
};
//# sourceMappingURL=LivroService.d.ts.map