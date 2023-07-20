const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Configura Express para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/minecraft', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'minecraft.html'));
});

app.get('/tos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tos.html'));
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
