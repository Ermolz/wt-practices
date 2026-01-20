"use strict";
function doOperation() {
    console.log("I want to be performed!");
}
setTimeout(doOperation, 0);

function eternalLoop(k = 0) {
    if (k % 1000000000 == 0) {
        console.log(k);
    }
    setImmediate(() => eternalLoop(k + 1));
}

eternalLoop();

