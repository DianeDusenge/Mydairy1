import entries from '../models/entryModel';
const addentry = (req, res) => {
    let itemIds = entries.map(item => item.entryId);
    // let orderNums = data.map(item => item.order);

    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
    // let newOrderNum = orderNums.length > 0 ? Math.max.apply(Math, orderNums) + 1 : 1;

    let newItem = {
        entryId: newId,
        title: req.body.title,
        description: req.body.description,
        createdOn: new Date()
    };

    entries.push(newItem);

    res.status(201).json(newItem);
    // message: 'Entry added successful';
};

export default addentry;