Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function SeaQueenMapRouteManager() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SeaQueenMapRouteManager, e);
  SeaQueenMapRouteManager.prototype.updateComponent = function (e) {
    if (e) {
      for (var t = 0; t < e.tMapNodeVOs.length; t++) {
        var i = e.tMapNodeVOs[t];
        for (var n = 0, o = i.orUnlockIDs; n < o.length; n++) {
          var a = o[n];
          if (a !== undefined) {
            var s = this._routeLayer["route_" + Math.min(e.getNodeById(a).pos, i.pos) + "_" + Math.max(e.getNodeById(a).pos, i.pos)];
            if (s) {
              var r = !i.isUnlocked;
              var l = i.isDefeated;
              var c = e.getNodeById(a).pos == 0 || e.getNodeById(a).isDefeated;
              if (r || l && c || !l && !c) {
                s.gotoAndStop(1);
              } else {
                s.gotoAndStop(2);
              }
            }
          }
        }
      }
    }
  };
  return SeaQueenMapRouteManager;
}(require("./1332.js").ATreasureMapRouteManager);
exports.SeaQueenMapRouteManager = a;
o.classImplementsInterfaces(a, "ITreasureUpdateComponent");