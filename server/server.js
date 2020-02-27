//import express
//import router

const express = require('express');
const app = express();
const router = express.Router();
const Axios = require('axios');
require('dotenv').config();

// Body parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//SERVE Static Files
app.use(express.static('build'));


//Listening to the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

// app.get(('/johncena'), (req, res) => {
//     console.log('I got the message');
//     // if(req) {
//     //     res.sendStatus(200);
// }).then(() => {res.sendStatus(200)})


app.get(('/johncena'), (req, res) => {

   
    let john = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&days=3&q=Minnesota`;
    console.log(`processing GET request ${john}}`)
    if(req) {
        Axios({
            method: 'GET',
            url: john
        }).then((response) => {
            res.send(response.data)
        }).catch(() => {
            res.sendStatus(500)
        })
    }
    else{
        res.sendStatus(500)
    }
})