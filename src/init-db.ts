import mysql from "mysql2/promise"

async function InicializarBanco() {
try{
    const conexao = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234"
    })

    console.log("Conexão com o banco estabelecida")

    await conexao.query('CREATE DATABASE IF NOT EXISTS meuslivros');
    console.log("Verificando Banco de dados")

    await conexao.query('USE meuslivros');

    const tableLivros = 'CREATE TABLE IF NOT EXISTS Livros (id INT AUTO_INCREMENT PRIMARY KEY,titulo VARCHAR(100) NOT NULL, autor VARCHAR(100) NOT NULL, descricao VARCHAR(300))';
    await conexao.query(tableLivros);

    await conexao.end();
    console.log("Inicialização concluída");
    }catch (error){
        console.error("Não foi possível conectar ao banco de dados", error);
    }
}

InicializarBanco();