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

// router.get("/getData", (req, res) => {
//     Data.find((err, data) => {
//       if (err) return res.json({ success: false, error: err });
//       return res.json({ success: true, data: data });
//     });
//   });

module.exports = router;