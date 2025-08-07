Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SDonatePointTypeVO(t) {
    var i = e.call(this) || this;
    i.DIV = t;
    return i;
  }
  n.__extends(C2SDonatePointTypeVO, e);
  C2SDonatePointTypeVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_DONATE_DONATION_ITEM;
  };
  return C2SDonatePointTypeVO;
}(o.BasicCommandVO);
exports.C2SDonatePointTypeVO = s;