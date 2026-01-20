"use strict";

const waittime = 5000;

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Operation finished");
            resolve();
        }, ms);
    });
}

(async () => {
    await delay(waittime);
    console.log("Program finished");
})();

