import express from 'express';
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