var alwaysThrows = () => {
	throw new Error("OH NOES");
}
var iterate = (int) => {
	console.log(int);
	return int + 1;
}
var pro = new Promise((resolve, reject) => {
	resolve(iterate(1));
})
pro.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(alwaysThrows)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.catch(console.log);
