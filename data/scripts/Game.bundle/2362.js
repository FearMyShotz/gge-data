Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./936.js");
var r = require("./4.js");
var l = require("./292.js");
var c = function (e) {
  function CastleTreasureMapItemDungeon(t, i) {
    return e.call(this, t, i) || this;
  }
  n.__extends(CastleTreasureMapItemDungeon, e);
  CastleTreasureMapItemDungeon.prototype.setItem = function () {
    var e;
    if (this._tMapNodeVO.isStartNode) {
      e = a.Localize.text("dialog_treasureMap_CampTooltip");
    } else if (this._tMapNodeVO.isEndNode) {
      e = a.Localize.text("dialog_treasureMap_TreasureTooltip");
      e += this.getAdditionalTooltipInfos();
    } else {
      e = a.Localize.text("dialog_treasureMap_DungeonTooltip");
      e += this.getAdditionalTooltipInfos();
    }
    this._disp.toolTipText = e;
    this._disp.mouseChildren = false;
    l.FlagHelper.colorFlag(this._disp, r.CastleModel.userData.playerCrest);
    if (this._tMapNodeVO.isDefeated) {
      this._disp.gotoAndStop(2);
    } else {
      this._disp.gotoAndStop(1);
    }
  };
  CastleTreasureMapItemDungeon.prototype.onMouseOver = function (t) {
    if (this._isActive) {
      e.prototype.onMouseOver.call(this, t);
    }
  };
  CastleTreasureMapItemDungeon.prototype.onClickMapItem = function (t) {
    if (this._isActive) {
      e.prototype.onClickMapItem.call(this, null);
      u.CastleTutorialArrowController.instance.clear();
      r.CastleModel.smartfoxClient.sendCommandVO(new s.C2SAttackInfoTreasureDungeonVO(this._tMapNodeVO.mapID, this._tMapNodeVO.nodeID));
    }
  };
  CastleTreasureMapItemDungeon.prototype.getAdditionalTooltipInfos = function () {
    if (this._isActive) {
      if (this._tMapNodeVO.isDefeated) {
        return "\n" + a.Localize.text("dialog_treasureMap_DefeatedTooltipp");
      }
      if (!this._tMapNodeVO.isUnlocked) {
        return "\n" + a.Localize.text("dialog_treasureMap_LockedTooltipp");
      }
    }
    return "";
  };
  return CastleTreasureMapItemDungeon;
}(require("./519.js").BasicSimpleWorldMapItem);
exports.CastleTreasureMapItemDungeon = c;
var u = require("./300.js");
o.classImplementsInterfaces(c, "ITreasureMapItem", "IIngameUICapable", "IWorldmapTooltipData");