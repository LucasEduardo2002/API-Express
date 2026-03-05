import type { Request, Response } from 'express';
export declare const LivroController: {
    ListarLivros: (req: Request, res: Response) => void;
    CriarLivro: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
    RemoverLivro: (req: Request, res: Response) => void;
};
//# sourceMappingURL=LivroController.d.ts.map