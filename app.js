var express = require('express'),
    app = express();

app.get('/', function(req, res){
    res.send('<h1>Hello</h1> Express');
});

app.get('/home', function(req, res){
    res.send('<h1>Hello</h1> Express');
})

app.get('*', function(req, res){
    res.send('404 Page not found');
})

var server = app.listen(300, function(){
    console.log('Listening on port 300');
});