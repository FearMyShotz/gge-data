Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SReviveAllHospitalUnits(t) {
    var i = this;
    i.C2 = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).C2 = t;
    return i;
  }
  n.__extends(C2SReviveAllHospitalUnits, e);
  C2SReviveAllHospitalUnits.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_REVIVE_ALL_HOSPITAL_UNITS;
  };
  return C2SReviveAllHospitalUnits;
}(o.BasicCommandVO);
exports.C2SReviveAllHospitalUnits = s;