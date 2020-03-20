const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const server = express();

const welcomeRouter = require("./routes/welcome-router");

server.use(helmet());
server.use(morgan('tiny'));
server.use(express.json());
server.use("/api/welcome", welcomeRouter);



server.use((req,res,next) => res.status(404).json({msg:'No Route Found'}));
server.use((err,req,res,next) => res.status(500).json({msg:'500 Error - Server'}));

module.exports = server;