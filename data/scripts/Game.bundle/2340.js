Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetNewRelicsEventVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetNewRelicsEventVO, e);
  C2SGetNewRelicsEventVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_NEW_RELICS_EVENT;
  };
  return C2SGetNewRelicsEventVO;
}(o.BasicCommandVO);
exports.C2SGetNewRelicsEventVO = s;