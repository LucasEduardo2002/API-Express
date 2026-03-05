import { Router } from 'express';
import { LivroController } from '../cotrollers/LivroController.js';
const router = Router();
router.get('/', LivroController.ListarLivros);
router.post('/', LivroController.CriarLivro);
router.delete('/:id', LivroController.RemoverLivro);
export default router;
//# sourceMappingURL=LivroRoutes.js.map