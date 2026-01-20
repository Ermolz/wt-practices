const fs = require("fs");
let s = undefined;
fs.readFile("test.txt", "utf8", function(error, data) {
    if (error) {
        console.error("Помилка читання файлу:", error);
        return;
    }
    s = data;
    console.log("Вміст файлу:", s);
});

