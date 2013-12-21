'use strict';
var es = require('event-stream');
var ngmin = require('ngmin');

module.exports = function () {
	return es.map(function (file, cb) {
		file.contents = new Buffer(ngmin.annotate(file.contents.toString()));
		cb(null, file);
	});
};
