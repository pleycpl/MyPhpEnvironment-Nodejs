var express = require('express');
var php = require('node-php');
var app = express();

app.use('/', php.cgi('./php'));

app.listen(9090);

console.log('Server listening 9090 port!');
