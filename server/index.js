import express from 'express';
import itemsRouter from './routes/entryroutes';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    return res.status(200).send({
        status: 200,
        message: 'Welcome to system'
    });
});
//const itemsRouter
app.use('/', itemsRouter);
const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
});

export default app;