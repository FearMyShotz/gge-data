Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2STempServerSelectCastleVO(t, i, n, o) {
    var s = this;
    s.ID = 0;
    s.OC2 = 0;
    s.PWR = 0;
    s.GST = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this).ID = t;
    s.OC2 = a.int(i ? 1 : 0);
    s.PWR = a.int(n ? 1 : 0);
    s.GST = o;
    return s;
  }
  n.__extends(C2STempServerSelectCastleVO, e);
  C2STempServerSelectCastleVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_TEMPORARY_SERVER_SELECT_CASTLE;
  };
  return C2STempServerSelectCastleVO;
}(o.BasicCommandVO);
exports.C2STempServerSelectCastleVO = r;