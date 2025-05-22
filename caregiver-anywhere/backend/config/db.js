const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'caregiver_db',
    password: 'nova_senha',
    port: 5432,
});

// Função para testar a conexão
const testConnection = async () => {
    try {
        const client = await pool.connect();
        const res = await client.query('SELECT NOW()'); // Consulta simples para obter a data e hora atual
        console.log('Conexão com o banco de dados bem-sucedida:', res.rows[0]);
        client.release(); // Libera o cliente após a consulta
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    }
};
// Chama a função para testar a conexão
testConnection();
module.exports = pool; // Exporta o pool para uso em outros arquivos
