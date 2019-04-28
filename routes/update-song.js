var express = require('express');
var router = express.Router();

var Songs = require('../models/Songs');

// Update Song
router.put('/:id', function(req, res, next){
    const { id, update } = req.body;
    var query = {_id: [req.params.id]};
    Songs.update(query, {$set:update}, {}, function(err, song){
        if(err){
            res.send(err);
        }
        res.json(song)
    })
});

module.exports = router;