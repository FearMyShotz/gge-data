Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceGiftCollect(t) {
    var i = this;
    i.ID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).ID = t;
    return i;
  }
  n.__extends(C2SAllianceGiftCollect, e);
  C2SAllianceGiftCollect.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_GIFT_COLLECT;
  };
  return C2SAllianceGiftCollect;
}(o.BasicCommandVO);
exports.C2SAllianceGiftCollect = s;