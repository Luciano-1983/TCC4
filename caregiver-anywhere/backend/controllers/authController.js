const User = require('../models/User');
const Professional = require('../models/Professional');

exports.registerUser   = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        // Verificar se o usuário já existe
        const existingUser   = await User.findUserByEmail(email);
        if (existingUser  ) {
            return res.status(400).json({ error: 'Usuário já existe com esse email' });
        }
        // Criar um novo usuário
        const user = await User.createUser ({ nome, email, senha });
        res.status(201).json(user);
    } catch (error) {
        console.error('Erro ao registrar usuário:', error); // Log do erro para depuração
        res.status(500).json({ error: 'Erro ao registrar usuário' });
    }
};

exports.loginUser  = async (req, res) => {
    const { email, senha } = req.body;
    const user = await User.findUserByEmail(email); // Corrigido aqui
    if (user && user.senha === senha) {
        res.status(200).json(user);
    } else {
        res.status(401).json({ error: 'Credenciais inválidas' });
    }
};

exports.registerProfessional = async (req, res) => {
    try {
        const professional = await Professional.createProfessional(req.body);
        res.status(201).json(professional);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao registrar profissional' });
    }
};

exports.loginProfessional = async (req, res) => {
    const { email, senha } = req.body;
    const professional = await Professional.findProfessionalByEmail(email);
    if (professional && professional.senha === senha) {
        res.status(200).json(professional);
    } else {
        res.status(401).json({ error: 'Credenciais inválidas' });
    }
};

exports.getProfessionals = async (req, res) => {
    try {
        const professionals = await Professional.getAllProfessionals();
        res.status(200).json(professionals);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar profissionais' });
    }
};
