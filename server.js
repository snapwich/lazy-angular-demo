
var express = require("express"),
    app     = express();

app.use(express.static('.'));

app.get('*', function(req, res) {
    res.sendfile('./index.html');
});

app.listen("8080");

