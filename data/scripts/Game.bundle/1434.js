Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SSelectSeasonCampVO(t, i, n, o = false) {
    var s = this;
    s.ID = 0;
    s.PWR = 0;
    s.OC2 = 0;
    s.SID = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this).ID = t;
    s.OC2 = a.int(i ? 1 : 0);
    s.PWR = a.int(o ? 1 : 0);
    s.SID = n;
    return s;
  }
  n.__extends(C2SSelectSeasonCampVO, e);
  C2SSelectSeasonCampVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_SELECT_PREBUILT_CAMP_ID;
  };
  return C2SSelectSeasonCampVO;
}(o.BasicCommandVO);
exports.C2SSelectSeasonCampVO = r;