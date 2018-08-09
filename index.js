//Required Modules
var express = require('express');
var app = express();
var modFuncC = require('./public/js/functions.js');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
var port = process.env.PORT || 3000;

//App pages for web
app.get('/', function(req, res) {
  res.render('./misc/index');
});

app.get('/directory', function(req, res) {
  var dataCopy = modFuncC.data.dataSet();
  res.render('./misc/directory', {
    data: dataCopy,
    pageCount: 15
  });
});

app.get('/directory_coil', function(req, res) {
  var coilData = modFuncC.data.dataCoilSet();
  res.render('./misc/directory_coil', {
    data: coilData
  });
});

//App pages for web
app.get('/help', function(req, res) {
  res.render('./misc/help');
});

app.get('/someRoute', function (req, res) {
    res.send('Hello SomeRoute!');
});

//Routes
var oldRoutes = require('./routes/oldVersion'); //C++ pages
var readRoutes = require('./routes/read')
var fc02Routes = require('./routes/fc02')
var fc04Routes = require('./routes/fc04')
var fc05Routes = require('./routes/fc05')
var fc06Routes = require('./routes/fc06')
var fc16Routes = require('./routes/fc16')
var control = require('./routes/control_panel')

app.use('/modbus_c', oldRoutes)
app.use('/modbus', readRoutes)
app.use('/modbusfc02', fc02Routes)
app.use('/modbusfc04', fc04Routes)
app.use('/modbusfc05', fc05Routes)
app.use('/modbusfc06', fc06Routes)
app.use('/modbusfc16', fc16Routes)
app.use('/control_panel', control)


//Load server on localhost 3000
app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});
