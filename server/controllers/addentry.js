import entries from '../models/entryModel';

const addentry = (req, res) => {
    let itemIds = entries.map(item => item.entryId);
    // let orderNums = data.map(item => item.order);

    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
    // let newOrderNum = orderNums.length > 0 ? Math.max.apply(Math, orderNums) + 1 : 1;
    if (!req.body.title) {
        return res.status(404).send({
            success: 'false',
            descrition: 'title is required',
        });
    } else if (!req.body.description) {
        return res.status(404).send({
            success: 'false',
            description: 'Description is required'
        });
    } else if (!req.CreatedOn) {
        return res.status(404).send({
            success: 'false',
            description: 'date is required'
        });
    }

    let newItem = {
        entryId: newId,
        title: req.body.title,
        description: req.body.description,
        createdOn: new Date()
    };

    entries.push(newItem);

    // res.status(201).json(newItem);
    return res.status(201).send({
        success: 'true',
        message: ' entry added successfully',
        addentry
    })
};

export default addentry;