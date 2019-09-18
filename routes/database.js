const express = require('express');
const router  = express.Router();
const Rick = require('../models/Pieces.js')


router.get('/pieces', (req, res, next)=>{
  Rick.find()
  .then((result)=>{
      console.log("This is the list of Ricks")
      res.render('database/pieces', {result})
  })
  .catch((err)=>{
      next(err);
  })
})
module.exports = router;
