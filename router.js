import express from 'express';
const router = express.Router();
import chatbotController from './controllers/index.js';
router.post("/ask", chatbotController.askGPT);

export default router;