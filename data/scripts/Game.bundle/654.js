Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2STreasureMapsVO(t = -1) {
    var i = this;
    i.MID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).MID = t;
    return i;
  }
  n.__extends(C2STreasureMapsVO, e);
  C2STreasureMapsVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_TREASUREMAPS;
  };
  return C2STreasureMapsVO;
}(o.BasicCommandVO);
exports.C2STreasureMapsVO = s;