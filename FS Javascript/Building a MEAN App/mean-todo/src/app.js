'use strict';

//to use iron node from terminal 'iron-node src/app.js'
debugger; //Sets a permanent breakpoint (for Iron Node)

const express = require('express');
const parser = require('body-parser');
const router = require('./api'); //Brings in the router file
const app = express();

require('./database');
require('./seed');

app.use('/', express.static('public')); //This serves the whole public folder. They all have routes now. 
app.use(parser.json());

app.use('/api', router); //Puts api prefix before router calls

app.listen(3000, function() {
    console.log("The server is now running on port 3000.");
});