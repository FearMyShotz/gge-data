Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SCreateDaimyoDefenseMovementVO(t, i, n, o) {
    var a = this;
    a.SID = 0;
    a.TX = 0;
    a.TY = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).SID = t;
    a.TX = i;
    a.TY = n;
    a.A = o;
    return a;
  }
  n.__extends(C2SCreateDaimyoDefenseMovementVO, e);
  C2SCreateDaimyoDefenseMovementVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_CREATE_DAIMYO_DEFENSE_MOVEMENT;
  };
  return C2SCreateDaimyoDefenseMovementVO;
}(o.BasicCommandVO);
exports.C2SCreateDaimyoDefenseMovementVO = s;