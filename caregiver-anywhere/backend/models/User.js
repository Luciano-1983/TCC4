const db = require('../config/db'); // Supondo que você tenha um arquivo de configuração do banco de dados

class User {
    static async findUserByEmail(email) {
        const result = await db.query('SELECT * FROM usuarios WHERE email = $1', [email]);
        return result.rows[0]; // Retorna o primeiro usuário encontrado
    }

    static async createUser(data) {
        const { nome, email, senha } = data;
        const result = await db.query(
            'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
            [nome, email, senha]
        );
        return result.rows[0]; // Retorna o usuário criado
    }
}

module.exports = User;


