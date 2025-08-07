Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./4.js");
var r = require("./292.js");
var l = function () {
  function CastleSeasonMovementCreator() {}
  CastleSeasonMovementCreator.prototype.createMovements = function (e, t) {
    var i;
    var n;
    var o = [];
    if ((t && (i = t.treasureMovementsVOs), i) && i != null) {
      for (var a = 0, s = i; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined) {
          n = this.createMovement(r, t);
          o.push(n);
        }
      }
    }
    return o;
  };
  CastleSeasonMovementCreator.prototype.createMovement = function (e, t) {
    var i;
    var o = false;
    var l = a.int(t.getRandomAchivedNodeByNodeID(e.tMapNodeID).pos);
    var u = a.int(t.getNodeById(e.tMapNodeID).pos);
    if (!(i = n.MovieClipHelper.getMovieClipByClassName("Event" + s.CastleModel.specialEventData.activeSeasonVO.eventId + "_Movement_" + l + "_" + u))) {
      i = n.MovieClipHelper.getMovieClipByClassName("Event" + s.CastleModel.specialEventData.activeSeasonVO.eventId + "_Movement_" + u + "_" + l);
      o = true;
    }
    for (var d = 0; d < 3; d++) {
      if (i && i.mcArmy["flag" + d]) {
        r.FlagHelper.colorFlag(i.mcArmy["flag" + d], s.CastleModel.userData.playerCrest);
      }
    }
    return new c.CastleTreasureMapMovement(i, e, l, u, o);
  };
  return CastleSeasonMovementCreator;
}();
exports.CastleSeasonMovementCreator = l;
var c = require("./1335.js");
o.classImplementsInterfaces(l, "ITreasureMovementCreator");