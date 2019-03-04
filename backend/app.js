var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//mongoose connects app to the local mongodb server
mongoose.connect('mongodb://localhost/songs', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
//lets you know in the terminal
//that database connected successfully
db.once('open', function(){
    console.log('MongoDB Connected');
});


//retrieves routes .js files
var routes = require('../routes/index');
var songs = require('../routes/songs');
var addsong = require('../routes/add-song');
var deletesong = require('../routes/delete-song')
var updatesong = require('../routes/update-song')
//initializes the app
var app = express();

//for parsing json files
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//sends routes to urls
app.use('/api', routes);
app.use('/api/songs', songs);
app.use('/api/add-song', addsong);
app.use('/api/delete-song', deletesong);
app.use('/api/update-song', updatesong);

//listens for localhost:3000 to run the application
app.listen(3001, function(){
    console.log('Server Running On Port 3001...')
});