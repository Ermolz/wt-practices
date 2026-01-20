const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/get-example', (req, res) => {
    const name = req.query.name || 'Гість';
    res.send(`
        <h1>GET запит</h1>
        <p>Привіт, ${name}!</p>
        <p><strong>Метод:</strong> GET</p>
        <p><strong>Дані в URL:</strong> ${req.url}</p>
        <p><strong>Переваги:</strong> Простота, можна закладки</p>
        <p><strong>Недоліки:</strong> Дані видно в URL, обмеження довжини</p>
        <p><a href="/">Повернутися</a></p>
    `);
});

app.post('/post-example', (req, res) => {
    const name = req.body.name || 'Гість';
    res.send(`
        <h1>POST запит</h1>
        <p>Привіт, ${name}!</p>
        <p><strong>Метод:</strong> POST</p>
        <p><strong>Дані в тілі запиту:</strong> Не видно в URL</p>
        <p><strong>Переваги:</strong> Безпечніше, немає обмежень довжини</p>
        <p><strong>Недоліки:</strong> Не можна закладки, складніше для тестування</p>
        <p><a href="/">Повернутися</a></p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

