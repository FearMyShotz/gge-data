Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SReplaceAlienCampVO(t, i, n) {
    var o = this;
    o.XPOS = 0;
    o.YPOS = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).RCK = t;
    o.XPOS = i;
    o.YPOS = n;
    return o;
  }
  n.__extends(C2SReplaceAlienCampVO, e);
  C2SReplaceAlienCampVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_REPLACE_ALIEN_CAMP;
  };
  return C2SReplaceAlienCampVO;
}(o.BasicCommandVO);
exports.C2SReplaceAlienCampVO = s;