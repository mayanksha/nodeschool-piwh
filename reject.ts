var onReject = (error) => console.log(error.message);
var promise = new Promise((resolve, reject) => {
	var error = new Error('REJECTED!');
	setTimeout(() => {  return reject(error)}, 300);
});
promise.then(undefined, onReject);
//promise.then().catch(onReject);
//promise.then(undefined).catch(onReject);
//promise.catch(onReject);
