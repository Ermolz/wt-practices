"use strict";
function doOperation() {
    console.log("I want to be performed!");
}
setTimeout(doOperation, 0);

for (let k = 0; ; k++) {
    if (k % 1000000000 == 0) {
        console.log(k);
    }
}

