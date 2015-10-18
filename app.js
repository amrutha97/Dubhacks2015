var express = require('express'),
    app = express(),
    engines = require('consolidate');

app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/', function(req, res){
    res.render('index', {});
});

app.listen(8080);
