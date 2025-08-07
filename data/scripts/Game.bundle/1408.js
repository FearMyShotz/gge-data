Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SSkipDungeonCooldownVO(t, i, n) {
    var o = this;
    o.X = 0;
    o.Y = 0;
    o.KID = 0;
    o.MID = 0;
    o.NID = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).KID = i;
    o.X = a.int(t.x);
    o.Y = a.int(t.y);
    if (n) {
      o.MID = n.mapID;
      o.NID = n.nodeID;
    } else {
      o.MID = -1;
      o.NID = -1;
    }
    return o;
  }
  n.__extends(C2SSkipDungeonCooldownVO, e);
  C2SSkipDungeonCooldownVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_SKIP_DUNGEON_COOLDOWN;
  };
  return C2SSkipDungeonCooldownVO;
}(o.BasicCommandVO);
exports.C2SSkipDungeonCooldownVO = r;