import express from 'express';
import allEntries from '../controllers/getAll'
import specificentry from '../controllers/specificentry'

const router = express.Router();



router.get('/api/v1/entries', allEntries);
router.get('/api/v1/entries/:entryId', specificentry);
//     let found = data.find(function(item) {
//         return item.id === parseInt(req.params.id);
//     });
//     if (found) {
//         res.status(200).json(found);
//     } else {
//         res.sendStatus(404);
//     }
// });
// //Add items to array

// router.put('/:id', function(req, res) {
//     let found = data.find(function(item) {
//         return item.id === parseInt(req.params.id);
//     });

//     if (found) {
//         let updated = {
//             id: found.id,
//             title: req.body.title,
//             description: req.body.description,
//             createdOn: new Date(),
//             // completed: req.body.completed
//         };

//         let targetIndex = data.indexOf(found);

//         data.splice(targetIndex, 1, updated);

//         res.sendStatus(204);
//     } else {
//         res.sendStatus(404);
//     }
// });
// router.post('/', function(req, res) {
//     let itemIds = data.map(item => item.id);
//     // let orderNums = data.map(item => item.order);

//     let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
//     // let newOrderNum = orderNums.length > 0 ? Math.max.apply(Math, orderNums) + 1 : 1;

//     let newItem = {
//         id: newId,
//         title: req.body.title,
//         description: req.body.description,
//         //   order: newOrderNum,
//         //   completed: false,
//         createdOn: new Date()
//     };

//     data.push(newItem);

//     res.status(201).json(newItem);
// });

export default router;
//module.exports = route;