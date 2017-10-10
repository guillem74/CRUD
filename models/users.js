var mongoose = require('mongoose');
var users = mongoose.Schema({
    username: String,
    password: String
});
var User = mongoose.model('users', users);
module.exports = User;