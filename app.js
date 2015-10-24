var app = require('express')();
var bodyParser = require('body-parser');

// For parsing JSON data.
app.use(bodyParser.json());

// Sets the directory of this file as the root.
app.locals.basedir = __dirname;

// Makes json objects prettier.
app.set('json spaces', 4);

// Instantiates the services.
var groupService = require('./services/group-service');

app.get('/:groupName', function(req, res) {
    var groupName = req.params.groupName;

    groupService.getUsers(groupName, res);
});

app.post('/:groupName', function(req, res) {
    var groupName = req.params.groupName;
    var user = req.body;

    groupService.updateUser(user, groupName, res);
});

// Starts the server.
app.listen(1234);