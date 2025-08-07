Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./7.js");
var r = function (e) {
  function C2SRenameCastleVO(t, i, n, o, s) {
    var r = this;
    r.CID = 0;
    r.P = 0;
    r.KID = 0;
    r.AT = 0;
    CONSTRUCTOR_HACK;
    (r = e.call(this) || this).CID = t;
    r.N = a.TextValide.getValideSmartFoxJSONTextMessage(n);
    r.P = o;
    r.KID = i;
    r.AT = s;
    return r;
  }
  n.__extends(C2SRenameCastleVO, e);
  C2SRenameCastleVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_RENAME_CASTLE;
  };
  return C2SRenameCastleVO;
}(o.BasicCommandVO);
exports.C2SRenameCastleVO = r;