Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./4.js");
var r = function () {
  function CastleTreasureMapHintComponent() {}
  CastleTreasureMapHintComponent.prototype.initComponent = function (e, t, i) {
    this._mapItems = t;
    if (i.parent) {
      this._mapLayer = i.parent;
    } else {
      this._mapLayer = i;
    }
  };
  CastleTreasureMapHintComponent.prototype.updateComponent = function (e) {
    var t = c.CastleLayoutManager.getInstance().highestShownDialog;
    if (s.CastleModel.treasureHuntData.currentMapID == a.TreasureMapsConst.FIRST_MAP_ID && e.hasAllPieces && o.instanceOfClass(t, "CastleTreasureMapDialog")) {
      l.CastleTutorialArrowController.instance.clear();
      var i = e.treasureMovementsVOs;
      for (var n = 0; n < this._mapItems.length; n++) {
        this._mapItems[n].updateVO(e.tMapNodeVOs[n]);
        if (this._mapItems[n].tMapNodeVO.orUnlockIDs[0] == 0 && !this._mapItems[n].tMapNodeVO.isStartNode && !this._mapItems[n].tMapNodeVO.isDefeated && !i) {
          l.CastleTutorialArrowController.instance.replace(this._mapItems[n].disp, false, false);
        }
      }
    }
  };
  CastleTreasureMapHintComponent.prototype.destroy = function () {
    l.CastleTutorialArrowController.instance.clear();
    this._mapItems = null;
    this._mapLayer = null;
  };
  return CastleTreasureMapHintComponent;
}();
exports.CastleTreasureMapHintComponent = r;
var l = require("./300.js");
var c = require("./17.js");
n.classImplementsInterfaces(r, "ITreasureUpdateComponent");