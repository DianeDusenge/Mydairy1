import express from 'express';
// const express = require('express');
// import bodyParser from 'body-parser';
// const bodyParser = require('body-parser');
const router = express.Router();
const data = [
    { id: 1, title: 'Final project', description: 'complete' },
    { id: 2, title: 'Trip to Rwanda', description: 'complete' },

];
router.get('/', function(req, res) {
    res.status(200).json(data);
});

//specific items

router.get('/:id', function(req, res) {
    let found = data.find(function(item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});



module.exports = router;