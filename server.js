// ======================================
// Require dependencies
require('dotenv').config()
var express = require('express')

// Initialiaze express
var app = express();
// Set up Port
var PORT = process.env.PORT || 3000
// Set up express data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// ======================================

// Routes

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

// ======================================

// Listener

app.listen(PORT, function(){
    console.log('App listening on port: ' + PORT)
})