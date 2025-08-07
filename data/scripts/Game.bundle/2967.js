Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SHospitalFlagsVO(t, i, n = -1) {
    var o = this;
    o.KID = 0;
    o.AID = 0;
    o.HRF = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).KID = t;
    o.AID = i;
    o.HRF = n;
    return o;
  }
  n.__extends(C2SHospitalFlagsVO, e);
  C2SHospitalFlagsVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_HOSPITAL_FLAGS;
  };
  return C2SHospitalFlagsVO;
}(o.BasicCommandVO);
exports.C2SHospitalFlagsVO = s;