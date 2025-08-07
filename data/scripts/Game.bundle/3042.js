Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SHunterInfoVO(t) {
    var i = this;
    i.FB = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).FB = t;
    return i;
  }
  n.__extends(C2SHunterInfoVO, e);
  C2SHunterInfoVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_HUNTER_INFO;
  };
  return C2SHunterInfoVO;
}(o.BasicCommandVO);
exports.C2SHunterInfoVO = s;