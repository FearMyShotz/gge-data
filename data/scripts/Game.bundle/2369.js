Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./4.js");
var r = require("./292.js");
var l = function () {
  function CastleTreasureMovementCreator() {}
  CastleTreasureMovementCreator.prototype.createMovements = function (e, t) {
    var i;
    var n = [];
    var o = t.treasureMovementsVOs;
    if (o != null) {
      for (var a = 0, s = o; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined) {
          i = this.createMovement(r, t);
          n.push(i);
        }
      }
    }
    return n;
  };
  CastleTreasureMovementCreator.prototype.createMovement = function (e, t) {
    var i = a.int(this.getLastValidNodeId(e.tMapNodeID, t));
    var n = e.tMapNodeID;
    var l = new (o.getDefinitionByName("Movement_" + i + "_" + n))();
    r.FlagHelper.colorFlag(l.mcArmy.flag1, s.CastleModel.userData.playerCrest);
    r.FlagHelper.colorFlag(l.mcArmy.flag2, s.CastleModel.userData.playerCrest);
    return new c.CastleTreasureMapMovement(l, e, i, n);
  };
  CastleTreasureMovementCreator.prototype.getLastValidNodeId = function (e, t) {
    for (var i = t.getNodeById(t.getNodeById(e).orUnlockIDs[0]); i && i.isTreasureHuntObstacle;) {
      i = t.getNodeById(i.orUnlockIDs[0]);
    }
    var n = 0;
    if (i) {
      n = i.nodeID;
    }
    return n;
  };
  return CastleTreasureMovementCreator;
}();
exports.CastleTreasureMovementCreator = l;
var c = require("./1335.js");
n.classImplementsInterfaces(l, "ITreasureMovementCreator");