let counter = 0;

setInterval(() => {
    counter++;
    self.postMessage(counter);
}, 1000);

