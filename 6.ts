var promise = new Promise(function (fulfill, reject) {
	fulfill('SECRET VALUE');
});
promise.then(console.log);

// Introducing: Promise.resolve
// It does the exact same thing as above:

var promise2 = Promise.resolve('SECRET VALUE');
promise.then(console.log);


// Likewise...

var promise3 = new Promise(function (fulfill, reject) {
	reject(new Error('SECRET VALUE'));
});

var promise4 = Promise.reject(new Error('SECRET VALUE'));
promise.catch(console.log);
