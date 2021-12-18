// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
app.use(express.json());

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const server = app.listen(2525, function(){
    console.log('server running!');
});

// GET route to fetch data
app.get('/', function(req, res){
    res.send(projectData);
});

// POST route to save data
app.post('/post',function addEntry(req, res){
    newEntry = {
        temperature: req.body.temp,
        date: req.body.date,
        response: req.body.response,
        city: req.body.city,
        time: req.body.time,
    };
    projectData = newEntry;
    res.send(projectData);
    console.log(projectData);
});

// GET route to update UI
app.get('/display', function(req, res){
    res.send(projectData);
})