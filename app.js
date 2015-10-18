var express = require('express'),
    app = express(),
    cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'html');

app.get('/', function(req, res){
    res.render('index', {}});
});
