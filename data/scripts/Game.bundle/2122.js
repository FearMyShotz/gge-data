Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./7.js");
var r = function (e) {
  function C2SSearchPlayerVO(t) {
    var i = e.call(this) || this;
    i.PN = a.TextValide.getValideSmartFoxJSONTextMessage(t);
    return i;
  }
  n.__extends(C2SSearchPlayerVO, e);
  C2SSearchPlayerVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_SEARCH_PLAYER;
  };
  return C2SSearchPlayerVO;
}(o.BasicCommandVO);
exports.C2SSearchPlayerVO = r;