Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SSkipHospitalSlot(t) {
    var i = this;
    i.S = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).S = t;
    return i;
  }
  n.__extends(C2SSkipHospitalSlot, e);
  C2SSkipHospitalSlot.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SKIP_HOSPITAL_SLOT;
  };
  return C2SSkipHospitalSlot;
}(o.BasicCommandVO);
exports.C2SSkipHospitalSlot = s;