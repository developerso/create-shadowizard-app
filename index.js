var express = require('express');  
var app = express();  
//set view engine  
app.get('/', function (req, res) {   
  res.sendFile('index.html', { root: '.' })
});  
var server = app.listen(5000, function () {  
    console.log('Node server is running..');  
});  
