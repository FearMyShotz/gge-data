Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function GPGCommandVO(t, i, n) {
    var o = this;
    o.PID = 0;
    o.RID = 0;
    o.A = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).RID = t;
    o.PID = i;
    o.A = n;
    return o;
  }
  n.__extends(GPGCommandVO, e);
  GPGCommandVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GRANT_GIFT;
  };
  return GPGCommandVO;
}(o.BasicCommandVO);
exports.GPGCommandVO = s;