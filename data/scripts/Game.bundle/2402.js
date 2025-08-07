Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SChangeBookmark(t) {
    var i = this;
    i.KID = 0;
    i.X = 0;
    i.Y = 0;
    i.IF = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).KID = t.kingdomId;
    i.X = t.posX;
    i.Y = t.posY;
    i.DN = t.name;
    i.IF = !!t.type.typeIndex;
    return i;
  }
  n.__extends(C2SChangeBookmark, e);
  C2SChangeBookmark.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_CHANGE_BOOKMARK;
  };
  return C2SChangeBookmark;
}(o.BasicCommandVO);
exports.C2SChangeBookmark = s;