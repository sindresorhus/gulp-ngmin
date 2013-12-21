'use strict';
var assert = require('assert');
var fs = require('fs');
var gutil = require('gulp-util');
var ngmin = require('./index');

it('should run a file through ngmin', function (cb) {
	var stream = ngmin();

	stream.on('data', function (data) {
		assert.equal(
			data.contents.toString(),
			'angular.module(\'whatever\').controller(\'MyCtrl\', [\n  \'$scope\',\n  \'$http\',\n  function ($scope, $http) {\n  }\n]);'
		);
		cb();
	});

	stream.write(new gutil.File({
		contents: 'angular.module(\'whatever\').controller(\'MyCtrl\', function ($scope, $http) {});'
	}));
});
