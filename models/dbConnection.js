var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/blog');

function connectDB(){
    db.on('error', function(error){
        console.log(error);
    });
}

var connectDB = new connectDB();

module.exports = connectDB;