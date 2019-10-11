import validation from '../validate/validation';
import entries from '../models/db';

const modifyentry = (req, res) => {
    let found = entries.find(function(item) {
        return item.entryId === parseInt(req.params.entryId);
    });

    const { error } = validation.validate(req.body);
    if (error) {
        return res.status(400).json({ status: 400, error: error.details[0].message });
    }
    if (found) {
        let updated = {
            entryId: found.entryId,
            title: req.body.title,
            description: req.body.description,
            createdOn: new Date(),
            // completed: req.body.completed
        };

        let targetIndex = entries.indexOf(found);

        entries.splice(targetIndex, 1, updated);

        return res.status(201).send({
            success: 'true',
            message: ' entry modified successfully',
            modifyentry
        })
    } else {
        return res.status(404).send({
            success: 'false',
            description: 'the entry does not exist'
        });
    }
};
export default modifyentry;
// import validation from '../validate/validation';
// import { pool } from '../config/connect';
// const modifyentry = async(req, res) => {



//     const { error } = validation.validate(req.body);
//     if (error) {
//         return res.status(400).json({ status: 400, error: error.details[0].message });
//     }
//     const createdon = new Date();

//     let updated = {

//         title: req.body.title,
//         description: req.body.description,







//     };

//     const query = 'UPDATE users SET title=$1,description=$2 createdon=$3 WHERE ID=$4 RETURNING *';
//     const values = [updated.title, updated.description, createdon, parseInt(req.params.id)];
//     const update = await pool.query(query, values);
//     if (update.rows === 1) {
//         response.status(404).json({
//             status: 404,
//             message: 'Entry not found'
//         });
//     } else {
//         response.status(200).json({
//             status: 200,
//             message: 'Entry updated successfully',
//             entry: edit.rows[0]
//         });
//     }
// };



// export default modifyentry;