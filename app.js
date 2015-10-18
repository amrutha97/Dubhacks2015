var express = require('express'),
    app = express(),
    engines = require('consolidate');

app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/', function(req, res){
    alert(req.access_token);
    res.render('index', {});
});

app.listen(process.env.PORT || 8080);
