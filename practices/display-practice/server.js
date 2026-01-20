const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const books = [
    { id: 1, author: "Ivanov", title: "Addicted to murders", year: 2018 },
    { id: 2, author: "Petrov", title: "The art of web programming", year: 1901 },
    { id: 3, author: "Sidorov", title: "How to cheat", year: 1515 }
];

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`API endpoint: http://localhost:${PORT}/api/books`);
});

