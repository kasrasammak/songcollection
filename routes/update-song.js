var express = require('express');
var router = express.Router();

var Songs = require('../models/Songs');

// Update Song
router.put('/', function(req, res, next){
    const { id, update } = req.body;
    var query = {_id: id};
    console.log(query);
    Songs.update(query, {$set:update}, {}, function(err, song){
        if(err){
            res.send(err);
        }
        res.json(song)
    })
})

// router.put("/", (req, res) => {
//     const { id, update } = req.body;
//     console.log(id);

//     Songs.findOneAndUpdate(id, update, err => {
//         console.log(id);
//       if (err) return res.json({ success: false, error: err });
//       return res.json({ success: true });
//     });
//   });

module.exports = router;