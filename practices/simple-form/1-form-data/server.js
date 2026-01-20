const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/greet', (req, res) => {
    const name = req.query.name || 'Гість';
    res.send(`<h1>Привіт, ${name}!</h1><p><a href="/">Повернутися</a></p>`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

