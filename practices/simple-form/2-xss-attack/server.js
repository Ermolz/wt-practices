const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/vulnerable', (req, res) => {
    const name = req.query.name || 'Гість';
    res.send(`
        <h1>Вразлива версія (без екранування)</h1>
        <p>Привіт, ${name}!</p>
        <p><strong>Увага:</strong> Якщо ввести HTML теги (наприклад, &lt;script&gt;alert('XSS')&lt;/script&gt;), вони виконаються!</p>
        <p><a href="/">Повернутися</a></p>
    `);
});

app.get('/safe', (req, res) => {
    const name = req.query.name || 'Гість';
    const escapeHtml = (text) => {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    };
    res.send(`
        <h1>Безпечна версія (з екрануванням)</h1>
        <p>Привіт, ${escapeHtml(name)}!</p>
        <p>HTML теги тепер екрановані і безпечні.</p>
        <p><a href="/">Повернутися</a></p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

