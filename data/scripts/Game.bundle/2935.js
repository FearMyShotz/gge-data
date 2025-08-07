Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SCancelHospitalSlot(t) {
    var i = this;
    i.S = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).S = t;
    return i;
  }
  n.__extends(C2SCancelHospitalSlot, e);
  C2SCancelHospitalSlot.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_CANCEL_HOSPITAL_SLOT;
  };
  return C2SCancelHospitalSlot;
}(o.BasicCommandVO);
exports.C2SCancelHospitalSlot = s;