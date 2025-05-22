const pool = require('../config/db');

class User {
    static async createUser (data) {
        const { nome, email, senha } = data;
        const result = await pool.query(
            'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
            [nome, email, senha]
        );
        return result.rows[0];
    }

    static async findUserByEmail(email) {
        const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
        return result.rows[0];
    }
}

module.exports = User;
