Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SDeleteAllianceBookmark(t) {
    var i = e.call(this) || this;
    i.BM = t;
    return i;
  }
  n.__extends(C2SDeleteAllianceBookmark, e);
  C2SDeleteAllianceBookmark.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_DELETE_ALLIANCE_BOOKMARK;
  };
  C2SDeleteAllianceBookmark.createFromVo = function (e, t = false) {
    return new C2SDeleteAllianceBookmark([C2SDeleteAllianceBookmark.voToCommandContent(e, t)]);
  };
  C2SDeleteAllianceBookmark.voToCommandContent = function (e, t = false) {
    return [e.bookmarkID, t ? 1 : 0];
  };
  return C2SDeleteAllianceBookmark;
}(o.BasicCommandVO);
exports.C2SDeleteAllianceBookmark = s;