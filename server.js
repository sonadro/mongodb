// imports
const express = require('express');
const ejs = require('ejs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

// configs
const { dbPw, port } = require('./config.json');

// create server
const server = express();

// middleware
server.use(express.static('public'));
server.use(express.json());
server.use(cookieParser());

// view engine
server.set('view engine', 'ejs');

// connect mongodb & start server
const dbURI = `mongodb+srv://dbUser:${dbPw}@cluster0.vnz2jh4.mongodb.net/testDb?retryWrites=true&w=majority`;
mongoose.connect(dbURI)
    .then((result) => {
        server.listen(port);
        console.log('Listening for requests on port', port);
    }).catch(err => console.error(err));

// routes
server.get('/', (req, res) => res.render('home'));