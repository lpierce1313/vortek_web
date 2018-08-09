var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var modFuncC = require('../public/js/functions.js');
var modbusC = {input: {}, result: {}};

module.exports = (function() {

    'use strict';
    var oldRoutes = require('express').Router();

    oldRoutes.get('/', function(req, res) {
      res.render('./c++/modbus_c');
    });

    oldRoutes.post('/', urlencodedParser, function (req, res) {
      modbusC.input = req.body;
      modbusC = modFuncC.data.option(modbusC);
      modbusC = modFuncC.data.result(modbusC);
      res.render('./c++/modbus_c-success', {input: modbusC.input, result: modbusC.result});
    });

    return oldRoutes;
})();
