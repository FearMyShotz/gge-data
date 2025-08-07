Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SStartFactionProtectionVO(t) {
    var i = this;
    i.ID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).ID = t;
    return i;
  }
  n.__extends(C2SStartFactionProtectionVO, e);
  C2SStartFactionProtectionVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_START_FACTIONPROTECTION;
  };
  return C2SStartFactionProtectionVO;
}(o.BasicCommandVO);
exports.C2SStartFactionProtectionVO = s;