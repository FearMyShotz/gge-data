Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = require("./203.js");
var l = function (e) {
  function C2SAddBookmark(t) {
    var i = this;
    i.K = 0;
    i.X = 0;
    i.Y = 0;
    i.TY = 0;
    i.TI = 0;
    i.IM = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).K = t.kingdomId;
    i.X = t.posX;
    i.Y = t.posY;
    i.N = t.name;
    i.TY = a.int(t.type.typeIndex);
    if (t.type == r.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER) {
      i.TI = a.int(t.attackOrderDetails.attackTimeStamp);
      i.M = i.extractPlayerIDs(t.attackOrderDetails.assignedAttackers);
      i.IM = a.int(t.attackOrderDetails.sendMessageToAssignedAttackers ? 1 : 0);
    } else {
      i.TI = -1;
      i.M = [];
      i.IM = 0;
    }
    return i;
  }
  n.__extends(C2SAddBookmark, e);
  C2SAddBookmark.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_ADD_BOOKMARK;
  };
  C2SAddBookmark.prototype.extractPlayerIDs = function (e) {
    var t = [];
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          t.push(o);
        }
      }
    }
    return t;
  };
  return C2SAddBookmark;
}(o.BasicCommandVO);
exports.C2SAddBookmark = l;