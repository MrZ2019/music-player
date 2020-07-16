
var fs = require('fs');


var args = require('yargs').argv;

var name = args.name;
var type = args.type;

copy('./template/view.html', `./views/${type}/${name}.html`)
copy('./template/module.js', `./scripts/${type}/${name}.js`)

function copy(src, dest) {
	fs.copyFile(src, dest, function(err) {
		if(err) {
			throw err;
		}
		console.log(dest + '\t\tsuccess');
	})
}