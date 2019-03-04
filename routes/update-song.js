var express = require('express');
var router = express.Router();

var Songs = require('../models/Songs');

//Update Song
router.put('/:id', function(req, res, next){
    var query = {_id: [req.params.id]};
    var body = req.body;
    Songs.update(query, {$set:body}, {}, function(err, song){
        if(err){
            res.send(err);
        }
        res.json(song)
    })
})

module.exports = router;