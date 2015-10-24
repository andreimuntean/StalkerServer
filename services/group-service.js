// Every group contains a list of users.
var groups = [];

// Measured in seconds.
var userLifetime = 10;

var clean = function() {
    var pastDate = new Date((new Date()).getTime() - userLifetime * 1000);

    for (var key in groups) {
        groups[key] = groups[key].filter(function(user) {
            return user.time > userLifetime;
        });
    }
}

// Periodically removes offline users.
setInterval(function() {
    queryEvents();
}, userLifetime * 1000);

module.exports = {
    getUsers: function(groupName, res) {
        res.json(groups[groupName]);
    },
    updateUser: function(user, groupName, res) {
        user["Time"] = Date.now();
        groups[groupName].push(user);
    },
    clean: function() {
        var seconds = 10;
        var pastDate = new Date((new Date()).getTime() - seconds * 1000);

        for (var key in groups) {
            groups[key] = groups[key].filter(function(user) {
                return user.time > pastDate;
            });
        }
    }
};