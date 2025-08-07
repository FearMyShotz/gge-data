Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./4.js");
var s = function (e) {
  function CastleTournamentEventFinishDialogProperties(t, i, n) {
    var o = this;
    o.messageID = 0;
    o.ownRank = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).messageID = t;
    o.ownRank = i;
    o.rewardsList = [];
    if (n != null) {
      for (var s = 0, r = n; s < r.length; s++) {
        var l = r[s];
        if (l !== undefined) {
          o.rewardsList.push(a.CastleModel.rewardData.getListById(l));
        }
      }
    }
    return o;
  }
  n.__extends(CastleTournamentEventFinishDialogProperties, e);
  return CastleTournamentEventFinishDialogProperties;
}(o.BasicProperties);
exports.CastleTournamentEventFinishDialogProperties = s;