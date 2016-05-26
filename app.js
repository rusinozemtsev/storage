var express = require('express');
var app = express();
var multer = require('multer');

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads')
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname);
	}
});

var upload = multer({
	storage: storage
});

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use(express.static('public'));
app.use(express.static('uploads'));

app.post('/api/upload', upload.single('file'), function (req, res, next) {
	res.send(req.file.filename);
	next();
});

app.listen(3001, function () {
	console.log('Working on port 3001');
});