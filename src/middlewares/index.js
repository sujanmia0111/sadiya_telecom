const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const applyMiddlewares = (app) => {
    app.use(cors());
    app.use(express.json({ limit: '50mb' }));
    app.use(morgan('dev'));
    app.use(express.urlencoded({ extended: true }));
};


module.exports = applyMiddlewares;