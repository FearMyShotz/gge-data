Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SMinuteSkipDungeonVO(t, i, n, o, a) {
    var s = this;
    s.X = 0;
    s.Y = 0;
    s.MID = 0;
    s.NID = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this).MST = t;
    s.KID = i.toString();
    s.X = n;
    s.Y = o;
    if (a) {
      s.MID = a.mapID;
      s.NID = a.nodeID;
    } else {
      s.MID = -1;
      s.NID = -1;
    }
    return s;
  }
  n.__extends(C2SMinuteSkipDungeonVO, e);
  C2SMinuteSkipDungeonVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_MINUTE_SKIP_DUNGEON;
  };
  return C2SMinuteSkipDungeonVO;
}(o.BasicCommandVO);
exports.C2SMinuteSkipDungeonVO = s;