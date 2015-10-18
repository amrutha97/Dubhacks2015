var express = require('express'),
    app = express(),
    cons = require('consolidate');

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
    res.render('index', {});
});

app.listen(8080);
