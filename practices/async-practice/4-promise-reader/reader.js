const fs = require('fs');

function readFilePromise(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

readFilePromise('test.txt')
    .then(data => {
        console.log('Вміст файлу:');
        console.log(data);
    })
    .catch(error => {
        console.error('Помилка при читанні файлу:', error.message);
    });

