Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SSetSeasonEventStartSeenEventVO(t, i) {
    var n = this;
    n.KLS = 0;
    n.KLSE = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).KLSE = a.int(t ? 1 : 0);
    n.KLS = a.int(i ? 1 : 0);
    return n;
  }
  n.__extends(C2SSetSeasonEventStartSeenEventVO, e);
  C2SSetSeasonEventStartSeenEventVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_SET_SEASON_EVENT_START_SEEN;
  };
  return C2SSetSeasonEventStartSeenEventVO;
}(o.BasicCommandVO);
exports.C2SSetSeasonEventStartSeenEventVO = r;