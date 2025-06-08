const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check
app.get('/health', (req, res) => {
    res.json({ 
        status: 'online',
        service: 'AutoCred Frontend Railway',
        version: '3.0.0',
        timestamp: new Date().toISOString(),
        message: 'Frontend Railway funcionando!'
    });
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 AutoCred Frontend Railway online na porta ${PORT}`);
    console.log(`📱 Acesse: http://localhost:${PORT}`);
    console.log(`✅ CORS habilitado para todas as origens`);
}); 