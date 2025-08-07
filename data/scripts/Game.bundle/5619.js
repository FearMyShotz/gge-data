Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetTargetDecosInAreaEventVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetTargetDecosInAreaEventVO, e);
  C2SGetTargetDecosInAreaEventVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_TARGET_DECOS_IN_AREA;
  };
  return C2SGetTargetDecosInAreaEventVO;
}(o.BasicCommandVO);
exports.C2SGetTargetDecosInAreaEventVO = s;