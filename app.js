var express = require('express'),
    app = express(),
    engines = require('consolidate'),
    path = require("path");

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/', function(req, res){
    res.render('index', {});
});

app.listen(process.env.PORT || 8080);
