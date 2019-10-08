import validation from '../validate/validation';
import entries from '../models/db';

const addentry = (req, res) => {
    let itemIds = entries.map(item => item.entryId);
    // let orderNums = data.map(item => item.order);

    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
    // let newOrderNum = orderNums.length > 0 ? Math.max.apply(Math, orderNums) + 1 : 1;

    const { error } = validation.validate(req.body);
    if (error) {
        return res.status(400).json({ status: 400, error: error.details[0].message });
    }
    let newItem = {
        entryId: newId,
        title: req.body.title,
        description: req.body.description,
        // createdOn: req.body.new Date(),
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