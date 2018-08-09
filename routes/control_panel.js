module.exports = (function() {

    'use strict';
    var control = require('express').Router();
    //App pages for web
    control.get('/html', function(req, res) {
      res.render('./gwt/ProVSimulator');
    });

    control.get('/', function(req, res) {
      res.render('./gwt/canvas');
    });


    return control;
})();
