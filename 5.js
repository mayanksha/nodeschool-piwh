var p1 = new Promise(function (resolve, reject) {
    resolve("PROMISE VALUE");
});
p1.then(console.log);
console.log("MAIN PROGRAM");
