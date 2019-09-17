import entries from '../models/entryModel';

const allEntries = (req, res) => {
    res.status(200).json({
        status: 200,
        data: entries,
    });
}
export default allEntries;