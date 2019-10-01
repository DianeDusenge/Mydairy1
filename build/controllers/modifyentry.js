"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _entryModel = _interopRequireDefault(require("../models/entryModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var modifyentry = function modifyentry(req, res) {
  var found = _entryModel["default"].find(function (item) {
    return item.entryId === parseInt(req.params.entryId);
  });

  if (found) {
    var updated = {
      entryId: found.entryId,
      title: req.body.title,
      description: req.body.description,
      createdOn: new Date() // completed: req.body.completed

    };

    var targetIndex = _entryModel["default"].indexOf(found);

    _entryModel["default"].splice(targetIndex, 1, updated);

    return res.status(204).send({
      success: 'true',
      message: ' entry updated successfully',
      modifyentry: modifyentry
    });
  } else {
    return res.status(404).send({
      success: 'false',
      description: 'the entry does not updated'
    });
  }
};

var _default = modifyentry; // return res.status(204).send({
//     success: 'true',
//     message: ' entry updated successfully',
//     modifyentry
// })
// }
// else {
//     return res.status(404).send({
//         success: 'false',
//         description: 'the entry does not updated'
//     });

exports["default"] = _default;