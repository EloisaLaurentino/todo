const cors =  require('cors');
const express = require('express');
const server = express();
const routes = require('./assets/routes/routes');

//Midlewares da API
server.use(cors());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use('/', routes)


