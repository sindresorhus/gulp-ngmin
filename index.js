'use strict';
var gutil = require('gulp-util');
var through = require('through');
var ngmin = require('ngmin');

module.exports = function () {
	return through(function (file) {
		if (file.isNull()) {
			return this.queue(file);
		}

		if (file.isStream()) {
			return this.emit('error', new gutil.PluginError('gulp-ngmin', 'Streaming not supported'));
		}

		try {
			file.contents = new Buffer(ngmin.annotate(file.contents.toString()));
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-ngmin', err));
		}

		this.queue(file);
	});
};
