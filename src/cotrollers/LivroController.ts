import type { Request, Response} from 'express';
import { LivroService } from '../services/LivroService.js';

export const LivroController = {

        ListarLivros : (req: Request, res: Response) =>{
        const ConsultaLivros = LivroService.Listar();
        res.json(ConsultaLivros)},

        CriarLivro : (req: Request, res: Response)=>{
        const LivroNovo = LivroService.AddLivro(req.body);
        res.status(201).json(LivroNovo)},

        RemoverLivro : (req: Request, res: Response)=>{
        const id = Number(req.params.id);
        LivroService.RemoverLivro(id)
        res.status(204).json("Livro removido com sucesso");
        }
}
