import express from 'express';
import itemsRouter from './routes/entryroutes';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
<<<<<<< HEAD
=======

>>>>>>> e9411e32b1067b5e4d02f5886db3a97aca3210e6
const PORT = 3000;
app.get('/', (req, res) => {
    return res.status(200).send({
        status: 200,
        message: 'Welcome to system'
    });
});
//const itemsRouter
app.use('/', itemsRouter);
app.listen(3000, function() {
    console.log(`server is running on PORT ${PORT}`);
});

export default app;