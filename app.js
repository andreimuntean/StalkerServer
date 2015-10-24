var bodyParser = require('body-parser');
var express = require('express');
var app = express();

// Enables support for urlencoded POST requests.
app.use(bodyParser.urlencoded({ extended: false }));

// Sets the directory of this file as the root.
app.locals.basedir = __dirname;

app.get('/:groupName', function(req, res) {
    var groupName = req.params.groupName;

    
});

app.post('/:groupName', function(req, res) {
    var groupName = req.params.groupName;

    
});

// Starts the server.
app.listen(1069);