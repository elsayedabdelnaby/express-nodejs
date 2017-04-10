var express = require('express'),
    app = express();

app.get('/', function(req, res){
    res.send('<h1>Hello</h1> Express');
});

app.get('/home', function(req, res){
    res.send('<h1>Hello</h1> Express');
})

var server = app.listen(300, function(){
    console.log('Listening on port 300');
});