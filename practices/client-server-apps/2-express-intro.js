const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Привіт від Express сервера!');
});

app.get('/about', (req, res) => {
    res.send('Це сторінка про нас');
});

app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}/`);
});

