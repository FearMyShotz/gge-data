Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SPeaceModeStartVO(t) {
    var i = this;
    i.CD = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).CD = t;
    return i;
  }
  n.__extends(C2SPeaceModeStartVO, e);
  C2SPeaceModeStartVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_PEACE_MODE_START;
  };
  return C2SPeaceModeStartVO;
}(o.BasicCommandVO);
exports.C2SPeaceModeStartVO = s;