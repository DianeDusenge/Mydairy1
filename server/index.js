// const express = require('express');
// import bodyParser from 'body-parser';
import express from 'express';
const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
const PORT = 3000;
app.get('/', (req, res) => {
    return res.status(200).send({
        status: 200,
        message: 'Welcome to system'
    });
});
app.listen(3000, function() {
    console.log(`server is running on PORT ${PORT}`);
});
// const itemsRouter = require('./routes/items1');
const itemsRouter = require('./routes/items1');
app.use('/items', itemsRouter);