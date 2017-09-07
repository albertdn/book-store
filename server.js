var express = require ('express');
var path = require ('path');
var bodyParser = require ('body-parser');

var index = require('./routes/index');
var books = require('./routes/books');

var port = 8000;

var app = express()

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//cors
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//api
app.use('/api', books);

app.listen(port, function(){
    console.log("listening to port "+port);
})