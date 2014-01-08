'use strict';
var es = require('event-stream');
var ngmin = require('ngmin');
var gutil = require('gulp-util');

module.exports = function () {
	return es.through(function (file) {
		if (file.isNull()) return this.emit('data', file); // pass along

		try {
			file.contents = new Buffer(ngmin.annotate(file.contents.toString()));
		} catch (err) {
            		this.emit('error', new gutil.PluginError('gulp-ngmin', err));
        	}
		this.emit('data', file);
	});
};
