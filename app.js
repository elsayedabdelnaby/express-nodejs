var express = require('express'),
    app = express();

app.get('/', function (req, res) {
    res.send('<h1>Hello</h1> Express');
});

app.get('/home', function (req, res) {
    res.send('<h1>Hello</h1> Express');
});

app.get('/who/:name?/:title?', function (req, res) {
    var name = req.params.name,
        title = req.params.title;
        console.log(req.params);
    res.send('<p>name: ' + name + '<br>title: ' + title + '</p>');
});

app.get('*', function (req, res) {
    res.send('<h1>404 Error, Page not found<h1>');
});

var server = app.listen(300, function () {
    console.log('Listening on port 300');
});