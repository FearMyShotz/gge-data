Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SDefenceCompleteVO(t, i, n = -1) {
    var o = this;
    o.CX = 0;
    o.CY = 0;
    o.AID = 0;
    o.KID = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).CX = a.int(t.x);
    o.CY = a.int(t.y);
    o.AID = i;
    o.KID = n;
    return o;
  }
  n.__extends(C2SDefenceCompleteVO, e);
  C2SDefenceCompleteVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_DEFENSE_COMPLETE;
  };
  return C2SDefenceCompleteVO;
}(o.BasicCommandVO);
exports.C2SDefenceCompleteVO = r;