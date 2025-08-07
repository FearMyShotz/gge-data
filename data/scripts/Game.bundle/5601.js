Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SCreateTreasureHuntMovementVO(t, i, n, o, s, r, l) {
    var c = this;
    c.LID = 0;
    c.BT = 0;
    c.BPC = 0;
    c.MID = 0;
    c.NID = 0;
    c.PTT = 0;
    CONSTRUCTOR_HACK;
    (c = e.call(this) || this).A = t;
    c.LID = r;
    c.BT = a.int(l ? -1 : i);
    c.BPC = n;
    c.MID = o;
    c.NID = s;
    c.PTT = a.int(l ? 1 : 0);
    return c;
  }
  n.__extends(C2SCreateTreasureHuntMovementVO, e);
  C2SCreateTreasureHuntMovementVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_CREATE_TREASUREHUNT_MOVEMENT;
  };
  return C2SCreateTreasureHuntMovementVO;
}(o.BasicCommandVO);
exports.C2SCreateTreasureHuntMovementVO = r;