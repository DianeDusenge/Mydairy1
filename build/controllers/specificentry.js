"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _entryModel = _interopRequireDefault(require("../models/entryModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var specificentry = function specificentry(req, res) {
  var found = _entryModel["default"].find(function (item) {
    return item.entryId === parseInt(req.params.entryId);
  });

  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
};

var _default = specificentry; // specificentry

exports["default"] = _default;