Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./116.js").getLogger("CastleArrayHelper");
var o = function () {
  function CastleArrayHelper() {}
  CastleArrayHelper.toUintVector = function (e) {
    n.warn("CastleArrayHelper::toUINTVector::  this not doing what it says...");
    var t = [];
    if (e) {
      for (var i = 0; i < e.length; i++) {
        t.push(e[i]);
      }
    }
    return t;
  };
  CastleArrayHelper.toIntVector = function (e) {
    n.warn("CastleArrayHelper::toINTVector::  this not doing what it says...");
    var t = [];
    if (e) {
      for (var i = 0; i < e.length; i++) {
        t.push(e[i]);
      }
    }
    return t;
  };
  CastleArrayHelper.moveIndex = function (e, t, i) {
    e.splice(i, 0, e.splice(t, 1)[0]);
  };
  return CastleArrayHelper;
}();
exports.CastleArrayHelper = o;
exports.numericSort = function (e, t) {
  return e - t;
};