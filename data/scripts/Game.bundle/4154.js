Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./4.js");
var u = require("./756.js");
var d = function (e) {
  function SeaQueenDungeonSeasonMapScreenItem(t, i) {
    return e.call(this, t, i) || this;
  }
  n.__extends(SeaQueenDungeonSeasonMapScreenItem, e);
  SeaQueenDungeonSeasonMapScreenItem.prototype.setItem = function () {
    if (this._tMapNodeVO.hasCoolDown) {
      this._disp.gotoAndStop(2);
      this.showPlayerCrest();
    } else if (this._tMapNodeVO.isDefeated) {
      this._disp.gotoAndStop(3);
      this.showPlayerCrest();
    } else if (this._tMapNodeVO.isUnlocked) {
      this._disp.gotoAndStop(1);
    } else {
      this._disp.gotoAndStop(4);
    }
    this.onChangeCrest(null);
  };
  SeaQueenDungeonSeasonMapScreenItem.prototype.onClickMapItem = function (t) {
    e.prototype.onClickMapItem.call(this, t);
    if (this._tMapNodeVO.hasCoolDown) {
      c.CastleModel.treasureMapData.clearMapHighlights(this.tMapNodeVO.mapID);
      var i = c.CastleModel.treasureMapData.getTreasureMapByID(this.tMapNodeVO.mapID, false);
      var n = new C.TreasureDungeonMapObjectVO();
      n.parseAreaInfo([r.WorldConst.AREA_TYPE_TREASURE_DUNGEON, -1, -1, 1, 0, 0, i.kingdomID]);
      n.ownerInfo = p.CastleNPCOwnerFactory.generateEventOwner(this._tMapNodeVO.eventID);
      n.type = this._tMapNodeVO.nodeType;
      n.mapID = this._tMapNodeVO.mapID;
      n.tMapNode = this._tMapNodeVO;
      var o = new u.SkippableCooldownDialogProperties(n, this.bindFunction(this.onHide), []);
      h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.SkippableCooldownDialog, o);
    }
  };
  SeaQueenDungeonSeasonMapScreenItem.prototype.onHide = function (e) {
    h.CastleDialogHandler.getInstance().onHideCurrentDialog();
  };
  SeaQueenDungeonSeasonMapScreenItem.prototype.setToolTip = function () {
    this._line1Content = {
      t: "",
      p: []
    };
    this._line2Content = {
      t: "",
      p: []
    };
    this.toolTipLine1();
    this.toolTipLine2();
  };
  SeaQueenDungeonSeasonMapScreenItem.prototype.toolTipLine2 = function () {
    if (this._tMapNodeVO.isUnlocked) {
      if (this.tMapNodeVO.coolDownInRemainingSeconds > 0) {
        this._line2Content.t = "cooldownX_colon";
        this._line2Content.p = [o.TimeStringHelper.getTimeToString(this._tMapNodeVO.coolDownInRemainingSeconds, o.TimeStringHelper.TWO_TIME_FORMAT, l.Localize.text)];
      } else {
        this._line2Content.t = "dialog_lowLevelUnderworld_location_attackable";
      }
    } else {
      this._line2Content.t = "dialog_lowLevelUnderworld_location_locked";
    }
    if (!this._tMapNodeVO.isUnockedByPortLevel && !this._tMapNodeVO.isUnlocked && !!this._tMapNodeVO.isEndNode) {
      this._line2Content.t = "";
    }
  };
  SeaQueenDungeonSeasonMapScreenItem.prototype.isMouseInteractive = function () {
    return this._tMapNodeVO.isUnlocked && this._isActive && this._tMapNodeVO.isUnlocked;
  };
  SeaQueenDungeonSeasonMapScreenItem.prototype.toolTipLine1 = function () {
    if (this._tMapNodeVO.isEndNode) {
      if (this.tMapNodeVO.eventID != s.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN || this._tMapNodeVO.isUnlocked) {
        this._line1Content.t = "dialog_seasonEvent_" + this.tMapNodeVO.eventID + "_FinalCastle";
      } else {
        this._line1Content.t = "Castle";
      }
    } else {
      this._line1Content.t = "dialog_seasonEvent_2_Dungeon";
    }
  };
  return SeaQueenDungeonSeasonMapScreenItem;
}(require("./1134.js").DungeonSeasonMapScreenItem);
exports.SeaQueenDungeonSeasonMapScreenItem = d;
var p = require("./387.js");
var h = require("./9.js");
var g = require("./757.js");
var C = require("./604.js");
a.classImplementsInterfaces(d, "ITreasureMapItem", "IIngameUICapable", "IWorldmapTooltipData");