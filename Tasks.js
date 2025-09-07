console.log("Sync");

setTimeout(() => {
    console.log("Macrotask");
},
0);

Promise.resolve().then(() => {
    console.log("Microtask");
});

console.log("Sync2");