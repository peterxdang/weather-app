//import express
//import router

const express = require('express');
const app = express();
const router = express.Router();


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


app.get('/johncena', (req, res) => res.sendStatus(200))
