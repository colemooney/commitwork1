const mongoose = require('mongoose');

const Rick = require('../models/Pieces.js')


mongoose
  .connect('mongodb://localhost/rick-database', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

  
  Rick.create({image:'https://cdn1.jolicloset.com/img4/detail4b/2017/11/52419-1/sneakers-rick-owens.jpg', name: 'Ramones', price: 400, info: 'shoes'})
 