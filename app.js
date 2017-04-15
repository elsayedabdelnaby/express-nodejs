var express = require('express'),
    app = express();

app.set('view engine', 'ejs');

app.locals.pagetitle = 'Awesome Website';

app.get('/', function (req, res) {
    res.render('default', { title: 'Home', classname: 'home', users: ['elsayed', 'alaraby', 'mohamed', 'hassan'] });
});

app.get('/home', function (req, res) {
    res.render('default', { title: 'Home', classname: 'home', users: ['elsayed', 'alaraby', 'mohamed', 'hassan'] });
});

app.get('/about', function (req, res) {
    res.render('default', { title: 'About Us', classname: 'about' });
});

app.get('*', function (req, res) {
    res.send('<h1>404 Error, Page not found<h1>');
});

var server = app.listen(300, function () {
    console.log('Listening on port 300');
});