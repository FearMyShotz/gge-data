Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./1078.js");
var r = function (e) {
  function ObstacleUnderworldSeasonMapScreenItem(t, i) {
    return e.call(this, t, i) || this;
  }
  n.__extends(ObstacleUnderworldSeasonMapScreenItem, e);
  ObstacleUnderworldSeasonMapScreenItem.prototype.onClickMapItem = function (e) {
    a.CastleModel.treasureMapData.clearMapHighlights(this.tMapNodeVO.mapID);
    l.CastleDialogHandler.getInstance().registerDefaultDialogs(c.CastleUnderworldSeasonRepairBridge, new s.CastleSeasonBaseRepairDialogProperties(this._tMapNodeVO, "dialog_repairBridge"));
  };
  return ObstacleUnderworldSeasonMapScreenItem;
}(require("./1867.js").ObstacleSeasonMapScreenItem);
exports.ObstacleUnderworldSeasonMapScreenItem = r;
var l = require("./9.js");
var c = require("./4159.js");
o.classImplementsInterfaces(r, "ITreasureMapItem", "IIngameUICapable", "IWorldmapTooltipData");