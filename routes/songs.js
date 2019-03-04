var express = require('express');
var router = express.Router();

var Songs = require('../models/Songs');

//List Songs
router.get('/', function(req, res, next){
    Songs.getSongs(function(err, songs){
        if (err){
            res.send(err);
        }
        res.json(songs);
        console.log(songs);
    },10);
});

module.exports = router;