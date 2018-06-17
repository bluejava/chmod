const chmod = require("./index")

if(process.argv.length < 4)
{
	console.log("Usage: chmod <filename> <permissions>")
	process.exit(1)
}

chmod(process.argv[2], Number(process.argv[3]))
