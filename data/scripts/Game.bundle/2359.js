Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleTreasureMapRouteManager() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleTreasureMapRouteManager, e);
  CastleTreasureMapRouteManager.prototype.updateComponent = function (e) {
    if (e) {
      var t;
      var i;
      var n;
      var o = 0;
      var a = 0;
      if (e.treasureMovementsVOs) {
        i = e.treasureMovementsVOs[0];
      }
      for (var s = 0; s < e.tMapNodeVOs.length; s++) {
        if (!(t = e.tMapNodeVOs[s]).isStartNode) {
          var r;
          var l = t;
          do {
            r = l;
            o = (l = e.getNodeById(r.orUnlockIDs[0])).nodeID;
            a = r.nodeID;
            (n = this._routeLayer["path_" + o + "_" + a]).mouseEnabled = false;
            if (i && i.tMapNodeID == t.nodeID) {
              n.gotoAndStop(3);
            } else if (r.isUnlocked && e.hasAllPieces) {
              n.gotoAndStop(2);
            } else {
              n.gotoAndStop(1);
            }
          } while (l && l.isTreasureHuntObstacle);
        }
      }
    }
  };
  return CastleTreasureMapRouteManager;
}(require("./1332.js").ATreasureMapRouteManager);
exports.CastleTreasureMapRouteManager = a;
o.classImplementsInterfaces(a, "ITreasureUpdateComponent");