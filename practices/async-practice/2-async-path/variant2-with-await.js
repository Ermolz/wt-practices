"use strict";

async function foo(x) {
    return x * 2;
}

(async () => {
    let r = await foo(5);
    console.log(r);
})();

