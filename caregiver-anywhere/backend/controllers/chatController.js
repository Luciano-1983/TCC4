const Professional = require('../models/Professional');

exports.getChatHistory = async (req, res) => {
    const { userId, professionalId } = req.params;
    // Aqui você pode implementar a lógica para buscar o histórico de chat
    // Para simplificação, vamos retornar uma resposta estática
    res.status(200).json({
        messages: [
            { sender: 'user', text: 'Olá, gostaria de saber mais sobre seus serviços.' },
            { sender: 'professional', text: 'Claro! Estou aqui para ajudar.' }
        ]
    });
};

exports.sendMessage = async (req, res) => {
    const { userId, professionalId, message } = req.body;
    // Aqui você pode implementar a lógica para salvar a mensagem no banco de dados
    // Para simplificação, vamos retornar a mensagem recebida
    res.status(201).json({ userId, professionalId, message });
};
