var express = require('express');
var router = express.Router();

var Songs = require('../models/Songs');

//add Song
router.post('/', function(req, res, next){
    var song = req.body;
    var newSong = new Songs(song)
    newSong.save(function(err, song){
        if(err){
            res.send(err);
        }
        res.json(song)
    })
})


module.exports = router;