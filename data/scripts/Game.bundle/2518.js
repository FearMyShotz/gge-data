Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SIncreaseAllianceTowerBuffVO(t, i) {
    var n = this;
    n.XPOS = 0;
    n.YPOS = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).XPOS = a.int(t.x);
    n.YPOS = a.int(t.y);
    n.TE = i;
    return n;
  }
  n.__extends(C2SIncreaseAllianceTowerBuffVO, e);
  C2SIncreaseAllianceTowerBuffVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_INCREASE_ALLIANCE_TOWER_BUFF;
  };
  return C2SIncreaseAllianceTowerBuffVO;
}(o.BasicCommandVO);
exports.C2SIncreaseAllianceTowerBuffVO = r;