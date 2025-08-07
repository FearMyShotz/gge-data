Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleEilandTitleItemVO(t, i) {
    var n = this;
    n.canAssignTitles = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).canAssignTitles = t;
    n.titleVO = i;
    return n;
  }
  n.__extends(CastleEilandTitleItemVO, e);
  return CastleEilandTitleItemVO;
}(require("./2.js").ScrollItemVO);
exports.CastleEilandTitleItemVO = o;