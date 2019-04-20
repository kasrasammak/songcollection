var mongoose = require('mongoose');

//SongSchema, each song will have an id, title, and artist
var SongSchema = mongoose.Schema({
    id: {
        type: Number
    },
    title: {
        type: String
    },
    artist: {
        type: String
    },
});

var Songs = module.exports = mongoose.model('Songs', SongSchema);

module.exports.getSongs = function(callback){    
    Songs.find(callback);
}

module.exports.getSongById = function (id, callback) {
    Songs.findById(id, callback)
}