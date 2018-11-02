var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
app.use('/stylesheets', express.static(__dirname + '/stylesheets'));
app.use('/javascripts', express.static(__dirname + '/javascripts'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + 'index.html'));
});

const port = process.env.PORT || 8080;

http.listen(port, () => console.log(`server running on port ${port}`));
