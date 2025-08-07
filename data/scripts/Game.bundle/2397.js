Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SDeleteBookmark(t) {
    var i = e.call(this) || this;
    i.BM = t;
    return i;
  }
  n.__extends(C2SDeleteBookmark, e);
  C2SDeleteBookmark.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_DELETE_BOOKMARK;
  };
  C2SDeleteBookmark.createFromVo = function (e) {
    return new C2SDeleteBookmark([C2SDeleteBookmark.voToCommandContent(e)]);
  };
  C2SDeleteBookmark.voToCommandContent = function (e) {
    return [e.kingdomId, e.posX, e.posY];
  };
  return C2SDeleteBookmark;
}(o.BasicCommandVO);
exports.C2SDeleteBookmark = s;