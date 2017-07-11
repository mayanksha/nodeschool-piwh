var attachTitle = (value) => "DR. " + value;
var p = Promise.resolve("MANHATTAN");
p.then(attachTitle).then(console.log);
