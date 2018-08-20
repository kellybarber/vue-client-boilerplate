const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/boilerplate')

module.exports.User = require('./user')