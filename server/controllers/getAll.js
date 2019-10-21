// import entries from '../models/db';

// const allEntries = (req, res) => {
//     res.status(200).json({
//         status: 200,
//         data: entries,
//     });
// }
// export default allEntries;
// import { pool } from '../models/db';
import { pool } from '../config/connect';

const allEntries = async(req, res) => {

    const query = 'SELECT * FROM users;';
    const result = await pool.query(query);
    if (result.rows < '1') {
        res.status(404).send({
            status: 404,
            message: 'No Entries found',

        });
    } else {
        return res.status(200).send({
            status: 200,
            message: 'Data retrieved Succesfully',
            users: result.rows,
        });

    }
};



export default allEntries;