import type { Request, Response } from 'express';
import { LivroService } from '../services/LivroService.js';

export const LivroController = {


    BuscarLivro: (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const BuscarLivro = LivroService.Buscar(id);
        if (BuscarLivro) {
            return res.status(201).json(BuscarLivro)
        }
            return res.status(404).json({ message: "Livro não encontrado"})
    },

    ListarLivros: (req: Request, res: Response) => {
        const ConsultaLivros = LivroService.Listar();
        res.json(ConsultaLivros)
    },

    CriarLivro: (req: Request, res: Response) => {
        const LivroNovo = LivroService.AddLivro(req.body);
        if (LivroNovo) {
            return res.status(201).json(LivroNovo)
        }
        res.status(409).json({ message: "Livro já existente" })
    },

    RemoverLivro: (req: Request, res: Response) => {
        const id = Number(req.params.id);
        LivroService.Remover(id)
        res.status(204).json("Livro removido com sucesso");
    },

    AlterarLivro: (req : Request, res: Response) =>{
        const id = Number(req.params.id);
        const LivroAlterado = LivroService.Alterar(id, req.body)

        if(LivroAlterado){
            return res.status(201).json(LivroAlterado)
        }
        res.status(404).json({ message: "Livro não encontrado"})
    }
}
