import validation from '../validate/validation';
import entries from '../models/entryModel';

const modifyentry = (req, res) => {
    let found = entries.find(function(item) {
        return item.entryId === parseInt(req.params.entryId);
    });
    // if (!req.body.title) {
    //     return res.status(404).send({
    //         success: 'false',
    //         descrition: 'title is required'
    //     });
    // } else if (!req.body.description) {
    //     return res.status(404).send({
    //         success: 'false',
    //         description: 'Description is required'
    //     });
    // }
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
// return res.status(204).send({
//     success: 'true',
//     message: ' entry updated successfully',
//     modifyentry
// })
// }
// else {
//     return res.status(404).send({
//         success: 'false',
//         description: 'the entry does not updated'
//     });