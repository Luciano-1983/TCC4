const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Adicione esta linha para importar o módulo path
const authRoutes = require('./routes/authRoutes');
const db = require('./config/db'); // Importa a configuração do banco de dados

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', authRoutes);

// Servir arquivos estáticos do diretório frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Rota padrão para a raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html')); // Envia o arquivo index.html
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
