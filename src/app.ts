import express from 'express';
import LivroRoutes from './routes/LivroRoutes.js';

const app = express();
app.use(express.json());

app.use('/livros', LivroRoutes);

app.listen('3000', () =>{
    console.log("Servidor rodando na porta 3000")
})

