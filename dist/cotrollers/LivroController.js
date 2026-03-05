import { LivroService } from '../services/LivroService.js';
export const LivroController = {
    ListarLivros: (req, res) => {
        const ConsultaLivros = LivroService.Listar();
        res.json(ConsultaLivros);
    },
    CriarLivro: (req, res) => {
        const LivroNovo = LivroService.AddLivro(req.body);
        if (LivroNovo) {
            return res.status(201).json(LivroNovo);
        }
        res.status(409).json({ message: "Livro já existente" });
    },
    RemoverLivro: (req, res) => {
        const id = Number(req.params.id);
        LivroService.RemoverLivro(id);
        res.status(204).json("Livro removido com sucesso");
    }
};
//# sourceMappingURL=LivroController.js.map