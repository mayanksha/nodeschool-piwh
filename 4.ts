var onRejected = (errorMsg) => console.log(errorMsg.message);
var promise = new Promise((resolve, reject) =>{
	resolve("I FIRED");
	reject(new Error("I DID NOT FIRE"));
});
promise.then((value) => console.log(value),
	onRejected
);
