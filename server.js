var http = require('http');
var path = require('path');
var express = require('express');
var urlencoded = require('body-parser').urlencoded;

// initialize MongoDB connection
//mongoose.connect(config.database.mongo.url);

// Create Express web app with some useful middleware
var app = express();
app.use(express.static(path.join(__dirname, '.')));
app.use(urlencoded({ extended: true }));

// Create routes
//require('./api')(app);

// Create HTTP server and mount Express app
var server = http.createServer(app);
server.listen(3000, function() {
    console.log('Express server listning on :' + 3000);
});
