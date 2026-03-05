import type { Livro } from '../models/LivroModel.js';
export declare const LivroService: {
    Listar: () => Livro[];
    AddLivro: (livro: Livro) => false | Livro;
    RemoverLivro: (id: number) => boolean;
};
//# sourceMappingURL=LivroService.d.ts.map