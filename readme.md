# [gulp](https://github.com/wearefractal/gulp)-ngmin [![Build Status](https://secure.travis-ci.org/sindresorhus/gulp-ngmin.png?branch=master)](http://travis-ci.org/sindresorhus/gulp-ngmin)

> Pre-minify AngularJS apps with [ngmin](https://github.com/btford/ngmin)

*Issues with the output should be reported on the ngmin [issue tracker](https://github.com/btford/ngmin/issues).*


## Install

Install with [npm](https://npmjs.org/package/gulp-ngmin)

```
npm install --save-dev gulp-ngmin
```


## Example

```js
var gulp = require('gulp');
var ngmin = require('gulp-ngmin');

gulp.task('default', function () {
	gulp.src('src/app.js')
		.pipe(ngmin())
		.pipe(gulp.dest('dist'));
});
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
