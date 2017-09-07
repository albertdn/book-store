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

router.get('/book/:id', function(req, res, send){
    db.book.find({_id: mongojs.ObjectId(req.params.id)}, function(err, book){
        if(err){
            res.send(err);
        }else{
            res.json(book);
        }
    })
})

router.post('/book', function(req,res,send){
    var book = req.body;
    if(!book.title){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }else{
        db.book.save(book, function(err, book){
            if(err){
                res.send(err);            
            }else{
                res.json(book);
            }
        });
    }
})

router.delete('/book', function(req, res, send){
    var id = req.query.id
    db.book.remove({_id: mongojs.ObjectId(id)} , function(err, book){
        if(err){
            res.send(err);
        }else{
            res.json(book);
        }
    });
})

module.exports = router;