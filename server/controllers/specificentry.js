import entryModel from '../models/entryModel';
const specificentry = (req, res) => {
    let found = entryModel.find(function(item) {
        return item.entryId === parseInt(req.params.entryId);
    });

    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
};
export default specificentry;