Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./18.js");
var u = require("./90.js");
var d = require("./4.js");
var p = require("./24.js");
var h = require("./276.js");
var g = function (e) {
  function ArmyMapmovement() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ArmyMapmovement, e);
  ArmyMapmovement.prototype.drawMovementIcon = function () {
    this.initMovementIconContainer();
    var e = this.baseClipName + ArmyMapmovement.CLIP_KINGDOM_AFFIX_SEPARATOR + this.kingdomAffix;
    var t = new p.CastleGoodgameExternalClip(e, this.assetFileURL(e), this.clipColor, 0, false, null, false, 1, false, false, true);
    if (this.direction == 0) {
      t.scaleX = -1;
    }
    this._movementIconContainer.addChild(t);
    t.scaleX = Math.sign(t.scaleX) * (t.scaleY /= h.CastleWorldmapConst.ZOOM_MAX);
    if (this.iArmyMapmovementVO && this.iArmyMapmovementVO.autoSkipCooldownType > r.AutoSkipCooldownConst.AUTO_SKIP_TYPE_OFF) {
      var i = new p.CastleGoodgameExternalClip(ArmyMapmovement.CLIP_AUTOSKIP_INDICATOR, this.assetFileURL(ArmyMapmovement.CLIP_AUTOSKIP_INDICATOR), null, 0, false, null, false, 1, false, false, true);
      this._movementIconContainer.addChild(i);
      i.scaleX = i.scaleY /= h.CastleWorldmapConst.ZOOM_MAX;
      i.doWhenLoaded(function () {
        i.currentshownDisplayObject.mouseChildren = false;
        i.currentshownDisplayObject.toolTipText = "dialog_armyMarching_autoCooldownSkip_active";
      });
    }
  };
  Object.defineProperty(ArmyMapmovement.prototype, "kingdomAffix", {
    get: function () {
      switch (this.mapMovementVO.kingdomID) {
        case l.WorldIsland.KINGDOM_ID:
          return d.CastleModel.kingdomData.getKingdomVOByID(l.WorldIsland.KINGDOM_ID).kingdomName;
        default:
          return "Common";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyMapmovement.prototype, "clipColor", {
    get: function () {
      var e = [];
      e.push(new o.ClipColor("flag", this.mapMovementVO.movementOwnerCrestVO.colorsFour));
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyMapmovement.prototype, "baseClipName", {
    get: function () {
      if (this.iArmyMapmovementVO.lordVO && !s.instanceOfClass(this.iArmyMapmovementVO.lordVO, "BaronVO") && this.iArmyMapmovementVO.lordVO.equipmentSlots && this.iArmyMapmovementVO.lordVO.skinSlotVO && this.iArmyMapmovementVO.lordVO.skinSlotVO.equipmentVO && this.iArmyMapmovementVO.lordVO.skinSlotVO.equipmentVO.skinInfoObject) {
        return "Skin_Mapmovement_" + this.iArmyMapmovementVO.lordVO.skinSlotVO.equipmentVO.skinAssetID;
      }
      if (this.mapMovementVO.kingdomID == l.WorldIsland.KINGDOM_ID) {
        return "Army_Mapmovement_Level1";
      }
      switch (this.iArmyMapmovementVO.horseBoosterWod) {
        case -1:
          return "Army_Mapmovement_Level" + this.iArmyMapmovementVO.getArmySizeLevel();
        case c.ClientConstCastle.HORSE_LEVEL1_WOD:
        case c.ClientConstCastle.HORSE_LEVEL2_WOD:
        case c.ClientConstCastle.HORSE_LEVEL3_WOD:
          return "Horse_Mapmovement_Level" + this.iArmyMapmovementVO.getArmySizeLevel();
        case c.ClientConstCastle.HORSE_P1_LEVEL1_WOD:
        case c.ClientConstCastle.HORSE_P1_LEVEL2_WOD:
        case c.ClientConstCastle.HORSE_P2_LEVEL1_WOD:
        case c.ClientConstCastle.HORSE_P2_LEVEL2_WOD:
        case c.ClientConstCastle.HORSE_P3_LEVEL1_WOD:
        case c.ClientConstCastle.HORSE_P3_LEVEL2_WOD:
          return "HorseP1_Mapmovement_Level" + this.iArmyMapmovementVO.getArmySizeLevel();
      }
      return "HorseP1_Mapmovement_Level3";
    },
    enumerable: true,
    configurable: true
  });
  ArmyMapmovement.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new u.CastleWorldmapEvent(u.CastleWorldmapEvent.SHOW_MENU, [this, u.CastleWorldmapEvent.RINGMENU_ARMYATTACK]));
  };
  Object.defineProperty(ArmyMapmovement.prototype, "iArmyMapmovementVO", {
    get: function () {
      var e;
      if (s.instanceOfClass(this.vo, "SiegeMapmovementVO")) {
        e = this.vo;
      } else if (s.instanceOfClass(this.vo, "ArmyAttackMapmovementVO")) {
        e = this.vo;
      } else if (s.instanceOfClass(this.vo, "ArmyTravelMapMovementVO")) {
        e = this.vo;
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  ArmyMapmovement.CLIP_KINGDOM_AFFIX_SEPARATOR = "_";
  ArmyMapmovement.CLIP_AUTOSKIP_INDICATOR = "Mapmovement_Indicator_Autoskip";
  return ArmyMapmovement;
}(require("./1922.js").InteractiveMapmovement);
exports.ArmyMapmovement = g;
a.classImplementsInterfaces(g, "IIngameUICapable", "IWorldmapTooltipData");