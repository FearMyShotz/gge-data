Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SDefenceWallVO(t, i, n, o, s, r, l, c, u, d, p) {
    var h = this;
    h.CX = 0;
    h.CY = 0;
    h.AID = 0;
    CONSTRUCTOR_HACK;
    (h = e.call(this) || this).CX = a.int(t.x);
    h.CY = a.int(t.y);
    h.AID = i;
    h.L = {};
    h.L.S = n;
    h.L.UP = o;
    h.L.UC = s;
    h.M = {};
    h.M.S = r;
    h.M.UP = l;
    h.M.UC = c;
    h.R = {};
    h.R.S = u;
    h.R.UP = d;
    h.R.UC = p;
    return h;
  }
  n.__extends(C2SDefenceWallVO, e);
  C2SDefenceWallVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_DEFENSE_WALL;
  };
  return C2SDefenceWallVO;
}(o.BasicCommandVO);
exports.C2SDefenceWallVO = r;