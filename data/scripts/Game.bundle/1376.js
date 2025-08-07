Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SRequestForgeCraftVO(t = 0) {
    var i = this;
    i.UPRAF = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).UPRAF = t;
    return i;
  }
  n.__extends(C2SRequestForgeCraftVO, e);
  C2SRequestForgeCraftVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_REQUEST_FORGE_CRAFT;
  };
  return C2SRequestForgeCraftVO;
}(o.BasicCommandVO);
exports.C2SRequestForgeCraftVO = s;