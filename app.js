var express = require('express');

var app = express();

app.use('/static', express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('listenting to this joint on port 3000');
});