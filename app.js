console.log('hi');

var mongoose = require('mongoose');
 
mongoose.connect('mongodb://trevor-the-admin:potato@ds047865.mongolab.com:47865/darren-the-database');

var user = mongoose.model('user', { 
  name: String,
  age: Number 
});

var localUser = new user({ 
  name: 'Kevin',
  age: 21
});

localUser.save(function (err) {
  if (err) // ...
  console.log('Oh dear, Kevin couldn\'t be created');
});


user.findOne({ name: 'Bob'}, function (err, doc){
  // doc is a Document
  if (err) // ...
  console.log('Oh dear, Kevin couldn\'t be created');
  else
  console.log(doc.name);
});