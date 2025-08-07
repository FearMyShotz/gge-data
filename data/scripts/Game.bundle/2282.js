Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SChangePasswordVO(t, i) {
    var n = e.call(this) || this;
    n.OPW = t;
    n.NPW = i;
    return n;
  }
  n.__extends(C2SChangePasswordVO, e);
  C2SChangePasswordVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_CHANGE_PASSWORD;
  };
  return C2SChangePasswordVO;
}(o.BasicCommandVO);
exports.C2SChangePasswordVO = s;