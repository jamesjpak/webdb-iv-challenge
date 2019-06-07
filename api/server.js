const express = require('express');
const helmet = require('helmet');

const server = express();

const cookbookRouter = require('../data/cookbook-router') 

server.use(helmet());
server.use(express.json());
server.use('/cookbook', cookbookRouter)

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Setting up Recipe Book App' })
})

module.exports = server;