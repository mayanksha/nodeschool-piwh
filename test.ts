var HTTP = require('q-io/http');
HTTP.read("http://localhost:8000/")
.then((json) => (console.log(json)));
//var read = server.read("http://localhost:1334/");
//read.then(val => console.log(val));
