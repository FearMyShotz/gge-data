Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceTopicChangeRanks(t, i) {
    var n = this;
    n.TID = -1;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).TID = t;
    n.RG = i;
    return n;
  }
  n.__extends(C2SAllianceTopicChangeRanks, e);
  C2SAllianceTopicChangeRanks.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_TOPIC_CHANGE_RANKS;
  };
  return C2SAllianceTopicChangeRanks;
}(o.BasicCommandVO);
exports.C2SAllianceTopicChangeRanks = s;