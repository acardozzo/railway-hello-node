const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Railway-like Platform! 🚀',
    version: '2.0.0',
    timestamp: new Date().toISOString(),
    hostname: require('os').hostname(),
    status: 'Rolling update test successful!'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
