var fs = require('fs');

const text = 
	new Promise(function (resolve, reject){
		fs.readFile('text.txtl', function(err, text){
			if(err)
				reject(err);
			else
				resolve(text.toString());
		})
	})
