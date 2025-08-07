Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SBoosterInfoVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SBoosterInfoVO, e);
  C2SBoosterInfoVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_BOOSTER_INFO;
  };
  return C2SBoosterInfoVO;
}(o.BasicCommandVO);
exports.C2SBoosterInfoVO = s;