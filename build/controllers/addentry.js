"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _entryModel = _interopRequireDefault(require("../models/entryModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addentry = function addentry(req, res) {
  var itemIds = _entryModel["default"].map(function (item) {
    return item.entryId;
  }); // let orderNums = data.map(item => item.order);


  var newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1; // let newOrderNum = orderNums.length > 0 ? Math.max.apply(Math, orderNums) + 1 : 1;

  if (!req.body.title) {
    return res.status(400).send({
      success: 'false',
      descrition: 'title is required'
    });
  } else if (!req.body.description) {
    return res.status(400).send({
      success: 'false',
      description: 'message is required'
    });
  }

  var newItem = {
    entryId: newId,
    title: req.body.title,
    description: req.body.description,
    createdOn: new Date()
  };

  _entryModel["default"].push(newItem); // res.status(201).json(newItem);


  return res.status(201).send({
    success: 'true',
    message: ' entry added successfully',
    addentry: addentry
  });
};

var _default = addentry; // import Models from '../Models/db';
// const addentry = function(req, res) {
//     if (!req.body.title) {
//         return res.status(400).send({
//             success: 'false',
//             descrition: 'title is required'
//         });
//     } else if (!req.body.description) {
//         return res.status(400).send({
//             success: 'false',
//             description: 'message is required'
//         });
//     }
//     const addentry = {
//         id: Models.length + 1,
//         title: req.body.title,
//         description: req.body.description
//     }
//     Models.push(addentry);
//     return res.status(201).send({
//         success: 'true',
//         message: ' entry added successfully',
//         addentry
//     })
// };
// module.exports = addentry;

exports["default"] = _default;