Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2STakeSoldiersVO(t, i) {
    var n = this;
    n.WID = 0;
    n.A = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).WID = t;
    n.A = i;
    return n;
  }
  n.__extends(C2STakeSoldiersVO, e);
  C2STakeSoldiersVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_TAKE_SOLDIERS;
  };
  return C2STakeSoldiersVO;
}(o.BasicCommandVO);
exports.C2STakeSoldiersVO = s;