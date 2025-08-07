Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SSpecialEventInfoVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SSpecialEventInfoVO, e);
  C2SSpecialEventInfoVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SPECIAL_EVENT_INFO;
  };
  return C2SSpecialEventInfoVO;
}(o.BasicCommandVO);
exports.C2SSpecialEventInfoVO = s;