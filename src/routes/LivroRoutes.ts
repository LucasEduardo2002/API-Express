import { Router } from 'express';
import { LivroController } from '../cotrollers/LivroController.js';

const router = Router();

router.get('/', LivroController.ListarLivros);
router.get('/:id', LivroController.BuscarLivro);
router.post('/', LivroController.CriarLivro);
router.delete('/:id', LivroController.RemoverLivro);
router.put('/:id', LivroController.AlterarLivro);

export default router;