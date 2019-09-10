const express = require('express');
const app = express();
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
const itemsRouter = require('./server/routes/items');
app.use('/items', itemsRouter);