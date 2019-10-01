"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _getAll = _interopRequireDefault(require("../controllers/getAll"));

var _specificentry = _interopRequireDefault(require("../controllers/specificentry"));

var _addentry = _interopRequireDefault(require("../controllers/addentry"));

var _modifyentry = _interopRequireDefault(require("../controllers/modifyentry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/api/v1/entries', _getAll["default"]);
router.get('/api/v1/entries/:entryId', _specificentry["default"]);
router.post('/api/v1/entries/', _addentry["default"]);
router.put('/api/v1/entries/:entryId', _modifyentry["default"]); //     let found = data.find(function(item) {
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

var _default = router; //module.exports = route;

exports["default"] = _default;