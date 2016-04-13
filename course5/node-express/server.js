var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var dishRouter = require('./dishRouter');
var leaderRouter = require('./leaderRouter');
var promoRouter = require('./promoRouter');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use('/dishes', dishRouter);
app.use('/leadership', leaderRouter);
app.use('/promotions', promoRouter);

app.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});