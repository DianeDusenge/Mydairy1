import entries from '../models/db';

const allEntries = (req, res) => {
    res.status(200).json({
        status: 200,
        data: entries,
    });
}
export default allEntries;