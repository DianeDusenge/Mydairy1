// import entryModel from '../models/db';
// const specificentry = (req, res) => {
//     let found = entryModel.find(function(item) {
//         return item.entryId === parseInt(req.params.entryId);
//     });

//     if (found) {
//         res.status(200).json(found);
//     } else {
//         res.sendStatus(404);
//     }
// };
// export default specificentry;

// specificentry
import { pool } from '../config/connect';

const allEntries = async(req, res) => {
    // pool.connect((err, client, done) => {
    // const id = req.params.id;
    const id = parseInt(req.params.id, 10);
    const values = [id];
    const query = 'SELECT * FROM users WHERE id=$1;';

    const result = await pool.query(query, values);
    if (result.rows < '1') {
        res.status(404).send({
            status: 404,
            message: 'No Entries found',

        });
    } else {
        return res.status(200).send({
            // status: 200,
            // message: 'Entries retrieved Succesfully',


            users: result.rows,
        });

    }
};



export default allEntries;