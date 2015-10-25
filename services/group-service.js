// Every group contains a list of users.
var groups = [];

// Measured in seconds.
var userLifetime = 20;

var clean = function() {
    var pastDate = new Date((new Date()).getTime() - userLifetime * 1000);

    for (var key in groups) {
        groups[key] = groups[key].filter(function(user) {
            return user.Time > pastDate.getTime();
        });
    }
}

// Periodically removes offline users.
setInterval(function() {
    clean();
}, userLifetime * 1000);

module.exports = {
    getUsers: function(groupName, res) {
        res.json(groups[groupName]);
    },
    updateUser: function(user, groupName, res) {
        user["Time"] = Date.now();

        if (groups[groupName] == null) {
            groups[groupName] = [];
        }

        for (var index = 0; index < groups[groupName].length; ++index) {
            var existingUser = groups[groupName][index];

            if (existingUser.Name == user.Name) {
                groups[groupName][index] = user;

                return;
            }
        }

        groups[groupName].push(user);
    }
};