var express = require('express');
var router = express.Router();

var Songs = require('../models/Songs');

//Delete Song
router.delete('/:id', function(req,res,next){
    var query = {_id: [req.params.id]};
    Songs.remove(query, function(err){
        if(err){
            res.send(err);
        }
        res.json({
            msg: "Success"
        })
    })
});

module.exports = router;