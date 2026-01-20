const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send('Це статичний текст, переданий від сервера до клієнта.');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log('Open browser and navigate to http://localhost:3000/');
});

