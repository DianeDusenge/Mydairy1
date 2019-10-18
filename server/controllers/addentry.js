import validation from '../validate/validation';
import { pool } from '../config/connect';


// const addentry = async(req, res) => {


//     const { error } = validation.validate(req.body);
//     if (error) {
//         return res.status(400).json({ status: 400, error: error.details[0].message });
//     }

//     let newItem = {
//         // entryId: req.body.id,
//         // title: req.body.title,
//         // description: req.body.description,
//         Allnames: req.body.Allnames,
//         Email: req.body.Email,
//         Username: req.body.Username,
//         Password: req.body.Password,

//     };
//     // users.push(newItem);

//     const query = 'INSERT INTO signup(allnames,email,username,password) VALUES($1,$2,$3,$4) RETURNING *';
//     const values = [newItem.Allnames, newItem.Email, newItem.Username, newItem.Password];

//     const result = await pool.query(query, values);
//     return res.status(201).send({
//         status: 201,
//         message: 'Successful insert',
//         data: result.rows[0],
//     });
// };

const addentry = async(req, res) => {


    const { error } = validation.validate(req.body);
    if (error) {
        return res.status(400).json({ status: 400, error: error.details[0].message });
    }
    const createdon = new Date();

    let newItem = {
        // entryId: req.body.id,
        title: req.body.title,
        description: req.body.description,



    };


    const query = 'INSERT INTO users(title,description,createdon) VALUES($1,$2,$3) RETURNING *';
    const values = [newItem.title, newItem.description, createdon];

    const result = await pool.query(query, values);
    return res.status(201).send({
        status: 201,
        message: 'Successful insert',
        data: result.rows[0],
    });
};


export default addentry;