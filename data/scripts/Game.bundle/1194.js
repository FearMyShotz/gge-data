Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./7.js");
var r = function (e) {
  function C2SIsoDisassembleObjectVO(t) {
    var i = this;
    i.OID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).OID = t;
    return i;
  }
  n.__extends(C2SIsoDisassembleObjectVO, e);
  C2SIsoDisassembleObjectVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_DISASSEMBLE_OBJECT;
  };
  return C2SIsoDisassembleObjectVO;
}(o.BasicCommandVO);
exports.C2SIsoDisassembleObjectVO = r;
a.classImplementsInterfaces(r, "IBuildingConstructionCommandVO");