Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SMoveToDistrictVO(t, i) {
    var n = this;
    n.OID = 0;
    n.DOID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).OID = t;
    n.DOID = i;
    return n;
  }
  n.__extends(C2SMoveToDistrictVO, e);
  C2SMoveToDistrictVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_MOVE_TO_DISTRICT;
  };
  return C2SMoveToDistrictVO;
}(o.BasicCommandVO);
exports.C2SMoveToDistrictVO = s;