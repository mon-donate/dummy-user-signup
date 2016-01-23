console.log('hi');

var mongoose = require('mongoose');
 
mongoose.connect('ds047865.mongolab.com:47865/darren-the-databases');

var Cat = mongoose.model('user', { 
  name: String,
  age: Number 
});

var localUser = new user({ 
  name: 'Kevin',
  age: 21
});
kitty.save(function (err) {
  if (err) // ...
  console.log('Oh dear, Kevin couldn\'t be created');
});