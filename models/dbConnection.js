var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/blog');

db.on('error', function(error){
    console.log(error);
});


var kittySchema = mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function(){
    var greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
    console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);

//make instance
var silence = new Kitten({ name: 'Silence' });
var fluffy = new Kitten({ name: 'fluffy' });

function connectDB(){
    silence.speak();


    this.sayName = function(){
        silence.speak();
        fluffy.speak();
    }
}

var connectDB = new connectDB();

module.exports = connectDB;