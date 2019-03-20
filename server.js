const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8082;
const cowsay = require('cowsay')
const flash = require('connect-flash');
const cors = require('cors')
require('dotenv').config()
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.options('*', cors())
require('./config/sessions')(app);


app.use(express.static(path.join(__dirname, "/public/")));
var routes_setter = require('./config/routes.js');
routes_setter(app);


app.listen(port, "127.0.0.1", function() {
  console.clear()
  console.log(cowsay.say({
    text: `server now listening on port ${port}`,
    f: 'dragon'
  }))
});
