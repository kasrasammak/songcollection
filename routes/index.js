var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.send('INDEX');
})


// var Songs = require('../models/Songs');

// //get Collection of Songs
// router.get('/', function(req, res, next){
//     Songs.getSongs(function(err, songs){
//         if (err){
//             res.send(err);
//         }
//         res.json(songs); 
//         console.log(songs);
//     },10);
// });

// //get Single Song
// router.get('/:id', function(req, res, next){
//     Songs.getSongById([req.params.id], function(err, song){
//         if(err){
//             res.send(err);
//         }
//         res.json(song);
//     })
// })

// //add Song
// router.post('/', function(req, res, next){
//     var song = req.body;
//     var newSong = new Songs({
//         title: 'Kasra',
//         artist: 'K-Owl'
//     })
//     newSong.save(function(err, song){
//         if(err){
//             res.send(err);
//         }
//         res.json(song)
//     })
// })

// //Update Song
// router.put('/:id', function(req, res, next){
//     var query = {_id: [req.params.id]};
//     var body = req.body;
//     Songs.update(query, {$set:body}, {}, function(err, song){
//         if(err){
//             res.send(err);
//         }
//         res.json(song)
//     })
// })

// //Delete Song
// router.delete('/:id', function(req,res,next){
//     var query = {_id: [req.params.id]};
//     Songs.remove(query, function(err){
//         if(err){
//             res.send(err);
//         }
//         res.json({
//             msg: "Success"
//         })
//     })
// });

module.exports = router;