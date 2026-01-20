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

delay(waittime).then(() => {
    console.log("Program finished");
});

