Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./7.js");
var r = function (e) {
  function C2SIsoFastCompleteObjectVO(t, i) {
    var n = this;
    n.OID = 0;
    n.FS = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).OID = t;
    n.FS = i;
    return n;
  }
  n.__extends(C2SIsoFastCompleteObjectVO, e);
  C2SIsoFastCompleteObjectVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_FAST_COMPLETE_OBJECT;
  };
  return C2SIsoFastCompleteObjectVO;
}(o.BasicCommandVO);
exports.C2SIsoFastCompleteObjectVO = r;
a.classImplementsInterfaces(r, "IBuildingConstructionCommandVO");