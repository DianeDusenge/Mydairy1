import entries from '../models/entryModel';
const modifyentry = (req, res) => {
    let found = entries.find(function(item) {
        return item.entryId === parseInt(req.params.entryId);
    });

    if (found) {
        let updated = {
            id: found.entryId,
            title: req.body.title,
            description: req.body.description,
            createdOn: new Date(),
            // completed: req.body.completed
        };

        let targetIndex = entries.indexOf(found);

        entries.splice(targetIndex, 1, updated);

        return res.status(200).send({
            success: 'true',
            message: 'Entry modified'
        });
    } else {
        return res.status(404).send({
            success: 'false',
            message: 'no entry found',
        });
    }
};
export default modifyentry;