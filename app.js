var express = require('express'),
    app = express(),
    routes = require('./routes');

app.set('view engine', 'ejs');

app.locals.pagetitle = 'Awesome Website';

app.get('/', routes.index);
app.get('/home', routes.index);
app.get('/about', routes.about);

app.get('*', function (req, res) {
    res.send('<h1>404 Error, Page not found<h1>');
});

var server = app.listen(300, function () {
    console.log('Listening on port 300');
});