var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mydb', ['book'])

db.on('error', function (err) {
    console.log('database error', err)
})

db.on('connect', function () {
    console.log('database connected')
})

router.get('/books', function(req,res,send){
    db.book.find(function(err, books){
        if(err){
            res.send(err);
        }else{
            res.json(books);            
        }
    })
})

module.exports = router;