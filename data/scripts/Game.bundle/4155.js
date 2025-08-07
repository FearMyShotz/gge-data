Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./4.js");
var r = require("./754.js");
var l = function (e) {
  function SeaQueenVillageSeasonMapScreenItem(t, i) {
    return e.call(this, t, i) || this;
  }
  n.__extends(SeaQueenVillageSeasonMapScreenItem, e);
  SeaQueenVillageSeasonMapScreenItem.prototype.isMouseInteractive = function () {
    return this._tMapNodeVO.isUnlocked && this._isActive && this._tMapNodeVO.isUnlocked;
  };
  SeaQueenVillageSeasonMapScreenItem.prototype.onClickMapItem = function (t) {
    e.prototype.onClickMapItem.call(this, t);
    if (this._tMapNodeVO.hasCoolDown) {
      s.CastleModel.treasureMapData.clearMapHighlights(this.tMapNodeVO.mapID);
      var i = s.CastleModel.treasureMapData.getTreasureMapByID(this.tMapNodeVO.mapID, false);
      var n = new p.TreasureDungeonMapObjectVO();
      n.parseAreaInfo([a.WorldConst.AREA_TYPE_TREASURE_DUNGEON, -1, -1, 1, 0, 0, i.kingdomID]);
      n.ownerInfo = c.CastleNPCOwnerFactory.generateEventOwner(this._tMapNodeVO.eventID);
      n.type = this._tMapNodeVO.nodeType;
      n.mapID = this._tMapNodeVO.mapID;
      n.tMapNode = this._tMapNodeVO;
      var o = new r.SkippableCooldownDialogProperties(n, this.bindFunction(this.onHide), []);
      u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.SkippableCooldownDialog, o);
    }
  };
  SeaQueenVillageSeasonMapScreenItem.prototype.onHide = function (e) {
    u.CastleDialogHandler.getInstance().onHideCurrentDialog();
  };
  return SeaQueenVillageSeasonMapScreenItem;
}(require("./1135.js").VillageSeasonMapScreenItem);
exports.SeaQueenVillageSeasonMapScreenItem = l;
var c = require("./387.js");
var u = require("./9.js");
var d = require("./755.js");
var p = require("./603.js");
o.classImplementsInterfaces(l, "ITreasureMapItem", "IIngameUICapable", "IWorldmapTooltipData");