import validation from '../validate/validation';
import { pool } from '../config/connect';


const addentry = async(req, res) => {


    const { error } = validation.validate(req.body);
    if (error) {
        return res.status(400).json({ status: 400, error: error.details[0].message });
    }

    let newItem = {
        // entryId: req.body.id,
        title: req.body.title,
        description: req.body.description,
        createdOn: new Date(),


    };


    const query = 'INSERT INTO signup(title,description,CreatedOn) VALUES($1,$2,$3) RETURNING *';
    const values = [newItem.title, newItem.description, newItem.CreatedOn];

    const result = await pool.query(query, values);
    return res.status(201).send({
        status: 201,
        message: 'Successful insert',
        data: result.rows[0],
    });
};



export default addentry;