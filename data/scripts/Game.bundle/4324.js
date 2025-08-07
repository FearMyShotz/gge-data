Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGeneralsHUBStatusVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGeneralsHUBStatusVO, e);
  C2SGeneralsHUBStatusVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GENERALS_HUB_STATUS;
  };
  return C2SGeneralsHUBStatusVO;
}(o.BasicCommandVO);
exports.C2SGeneralsHUBStatusVO = s;