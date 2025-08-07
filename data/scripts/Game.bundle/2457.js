Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./7.js");
var r = function (e) {
  function C2SAllianceChangeNameVO(t) {
    var i = e.call(this) || this;
    i.AN = a.TextValide.getValideSmartFoxJSONTextMessage(t);
    return i;
  }
  n.__extends(C2SAllianceChangeNameVO, e);
  C2SAllianceChangeNameVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_ALLIANCE_CHANGE_NAME;
  };
  return C2SAllianceChangeNameVO;
}(o.BasicCommandVO);
exports.C2SAllianceChangeNameVO = r;