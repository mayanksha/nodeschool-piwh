var text = process.argv[2];
var parsePromised = (text) => {
	try {
		return Promise.resolve(JSON.parse(text));
	}
	catch(error){
		return Promise.reject(error.message);
	}
}
parsePromised(text).then(console.log).catch(console.log);
