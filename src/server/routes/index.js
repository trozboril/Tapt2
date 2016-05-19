var express = require('express');
var router = express.Router();

// *** root route *** //
router.get('/', function (req, res, next) {
  if( !req.user ){
      res.render('index', { title: 'Tapt!' });
  } else {
    res.render('index', { maintitle: 'Tapt!', title: 'Tapt,', name: req.user.name, id: req.user.id});
  }
});

module.exports = router;
