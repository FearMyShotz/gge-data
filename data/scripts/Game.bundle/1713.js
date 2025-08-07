Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetCampUnitCapacity(t) {
    var i = this;
    i.CID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).CID = t;
    return i;
  }
  n.__extends(C2SGetCampUnitCapacity, e);
  C2SGetCampUnitCapacity.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_CAMP_UNIT_CAPACITY;
  };
  return C2SGetCampUnitCapacity;
}(o.BasicCommandVO);
exports.C2SGetCampUnitCapacity = s;