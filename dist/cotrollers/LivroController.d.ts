import type { Request, Response } from 'express';
export declare const LivroController: {
    BuscarLivro: (req: Request, res: Response) => Response<any, Record<string, any>>;
    ListarLivros: (req: Request, res: Response) => void;
    CriarLivro: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
    RemoverLivro: (req: Request, res: Response) => void;
    AlterarLivro: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
};
//# sourceMappingURL=LivroController.d.ts.map