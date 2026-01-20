"use strict";

async function foo(x) {
    return x * 2;
}

foo(5).then(r => {
    console.log(r);
});

