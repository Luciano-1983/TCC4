const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Rota para obter o histórico de chat
router.get('/chat/:userId/:professionalId', chatController.getChatHistory);

// Rota para enviar uma mensagem
router.post('/chat/send', chatController.sendMessage);

module.exports = router;
