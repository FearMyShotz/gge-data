Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SDismissManyHospitalUnits(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).UT = t;
    return i;
  }
  n.__extends(C2SDismissManyHospitalUnits, e);
  C2SDismissManyHospitalUnits.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_DISMISS_HOSPITAL_UNITS;
  };
  return C2SDismissManyHospitalUnits;
}(o.BasicCommandVO);
exports.C2SDismissManyHospitalUnits = s;