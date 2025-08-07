Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SActivateAllianceTowerBuffVO(t) {
    var i = this;
    i.XPOS = 0;
    i.YPOS = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).XPOS = a.int(t.x);
    i.YPOS = a.int(t.y);
    return i;
  }
  n.__extends(C2SActivateAllianceTowerBuffVO, e);
  C2SActivateAllianceTowerBuffVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_ACTIVATE_ALLIANCE_TOWER_BUFF;
  };
  return C2SActivateAllianceTowerBuffVO;
}(o.BasicCommandVO);
exports.C2SActivateAllianceTowerBuffVO = r;