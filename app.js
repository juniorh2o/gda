var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.set('views', './server/views');

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.use('/public', express.static('./public'));

app.use('/bower_components', express.static('./bower_components'));

require('./server/routes.server').init(app);

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(3000, function () {
    console.log('Running on port 3000!');
});