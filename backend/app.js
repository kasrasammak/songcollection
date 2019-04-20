var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

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

app.use(function(req, res, next) { 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
   //intercepts OPTIONS method
   if
    ('OPTIONS' === req.method) { //respond with 200
        res.send(200);
    } else { //move on
        next(); } 
});


app.options("/*",
 function(req, res, next){ 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.send(200);
});
 

//sends routes to urls
app.use('/api', routes);
app.use('/api/songs', songs);
app.use('/api/add-song', addsong);
app.use('/api/delete-song', deletesong);
app.use('/api/update-song', updatesong);

//routes to static page
app.use('/', express.static(path.join(__dirname, '../client/build')))




//listens for localhost:3000 to run the application
app.listen(3001, function(){
    console.log('Server Running On Port 3001...')
});