Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./7.js");
var l = function (e) {
  function C2SUpdateFactionProtectionVO() {
    var t = this;
    t.KID = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).KID = s.int(a.FactionConst.KINGDOM_ID);
    return t;
  }
  n.__extends(C2SUpdateFactionProtectionVO, e);
  C2SUpdateFactionProtectionVO.prototype.getCmdId = function () {
    return r.ClientConstSF.C2S_USER_ATTACK_PROTECTION;
  };
  return C2SUpdateFactionProtectionVO;
}(o.BasicCommandVO);
exports.C2SUpdateFactionProtectionVO = l;