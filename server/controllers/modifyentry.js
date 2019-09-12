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

        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
};
export default modifyentry;