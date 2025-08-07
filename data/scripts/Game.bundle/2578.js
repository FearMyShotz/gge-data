Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./7.js");
var r = function (e) {
  function C2SAllianceSendApplicationVO(t, i) {
    var n = this;
    n.AID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).AID = t;
    n.AT = a.TextValide.getValideSmartFoxJSONTextMessage(i);
    return n;
  }
  n.__extends(C2SAllianceSendApplicationVO, e);
  C2SAllianceSendApplicationVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_ALLIANCE_SEND_APPLICATION;
  };
  return C2SAllianceSendApplicationVO;
}(o.BasicCommandVO);
exports.C2SAllianceSendApplicationVO = r;