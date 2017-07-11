var promise = new Promise(function(resolve, reject){
	var value = "FULFILLED!";
	setTimeout(() => {return resolve(value)}, 300);
});
promise.then((value) => console.log(value));
