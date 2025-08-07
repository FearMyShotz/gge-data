Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./4.js");
var u = require("./2366.js");
var d = function (e) {
  function CastleTreasureMapItemObstacle(t, i) {
    return e.call(this, t, i) || this;
  }
  n.__extends(CastleTreasureMapItemObstacle, e);
  CastleTreasureMapItemObstacle.prototype.setItem = function () {
    var e;
    var t = l.int(c.CastleModel.treasureHuntData.treasureHuntMapVO.kingdomID);
    if (this._tMapNodeVO.isSwamp) {
      switch (t) {
        case s.WorldIce.KINGDOM_ID:
          e = r.Localize.text("dialog_repairIce_Swamp_title");
          break;
        case a.WorldDessert.KINGDOM_ID:
          e = r.Localize.text("dialog_repairSAND_title");
          break;
        default:
          e = r.Localize.text("dialog_repairSwamp_title");
      }
    } else if (this._tMapNodeVO.isBridge) {
      if (this._tMapNodeVO.isDefeated) {
        this._disp.gotoAndStop(2);
        e = r.Localize.text("dialog_seasonEvent_2_Bridge");
      } else {
        this._disp.gotoAndStop(1);
        e = r.Localize.text("dialog_repairBridge_title");
      }
    } else if (this._tMapNodeVO.isQuickSand && t == a.WorldDessert.KINGDOM_ID) {
      e = r.Localize.text("dialog_repairSAND_title");
    }
    e += this.getAdditionalTooltipInfos();
    this._disp.toolTipText = e;
    this._disp.mouseChildren = false;
  };
  CastleTreasureMapItemObstacle.prototype.getAdditionalTooltipInfos = function () {
    if (this._tMapNodeVO.isDefeated) {
      return "";
    }
    if (this._isActive) {
      if (this._tMapNodeVO.isDefeated) {
        return "\n" + r.Localize.text("dialog_treasureMap_DefeatedTooltipp");
      }
      if (!this._tMapNodeVO.isUnlocked) {
        return "\n" + r.Localize.text("dialog_treasureMap_LockedTooltipp");
      }
    }
    return "";
  };
  CastleTreasureMapItemObstacle.prototype.onClickMapItem = function (t) {
    if (this._isActive) {
      e.prototype.onClickMapItem.call(this, null);
      CastleTreasureMapItemObstacle.dialogHandler.registerDefaultDialogs(h.CastleTreasureMapUnlockObstacleDialog, new u.CastleTreasureMapUnlockObstacleDialogProperties(this._tMapNodeVO));
    }
  };
  CastleTreasureMapItemObstacle.prototype.onMouseOver = function (t) {
    if (this._isActive) {
      e.prototype.onMouseOver.call(this, t);
    }
  };
  Object.defineProperty(CastleTreasureMapItemObstacle, "dialogHandler", {
    get: function () {
      return p.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleTreasureMapItemObstacle;
}(require("./520.js").BasicSimpleWorldMapItem);
exports.CastleTreasureMapItemObstacle = d;
var p = require("./9.js");
var h = require("./2367.js");
o.classImplementsInterfaces(d, "ITreasureMapItem", "IIngameUICapable", "IWorldmapTooltipData");