Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./148.js");
var c = require("./936.js");
var u = require("./21.js");
var d = require("./32.js");
var p = require("./273.js");
var h = require("./15.js");
var g = require("./4.js");
var C = require("./519.js");
var _ = require("./292.js");
var m = function (e) {
  function DungeonSeasonMapScreenItem(t, i) {
    return e.call(this, t, i) || this;
  }
  n.__extends(DungeonSeasonMapScreenItem, e);
  DungeonSeasonMapScreenItem.prototype.setItem = function () {
    if (this._tMapNodeVO.isDefeated) {
      this._disp.gotoAndStop(2);
      this.showPlayerCrest();
    } else if (this._tMapNodeVO.isUnlocked) {
      this._disp.gotoAndStop(1);
    } else {
      this._disp.gotoAndStop(3);
    }
    this.onChangeCrest(null);
  };
  DungeonSeasonMapScreenItem.prototype.addEventListeners = function () {
    e.prototype.addEventListeners.call(this);
    h.CastleBasicController.getInstance().addEventListener(d.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    g.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  DungeonSeasonMapScreenItem.prototype.removeEventListeners = function () {
    e.prototype.removeEventListeners.call(this);
    h.CastleBasicController.getInstance().removeEventListener(d.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    g.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  DungeonSeasonMapScreenItem.prototype.onTimer = function (e) {
    if (this._tMapNodeVO) {
      this.setItem();
    }
  };
  DungeonSeasonMapScreenItem.prototype.showPlayerCrest = function () {
    if (this._disp.mc_flag) {
      _.FlagHelper.colorFlag(this._disp.mc_flag, g.CastleModel.userData.playerCrest);
    }
  };
  DungeonSeasonMapScreenItem.prototype.onChangeCrest = function (e) {
    if (this._disp.dungeon) {
      _.FlagHelper.colorFlag(this._disp.dungeon.flag0, g.CastleModel.userData.playerCrest);
    }
    _.FlagHelper.colorFlag(this._disp.flag, g.CastleModel.userData.playerCrest);
    _.FlagHelper.colorFlag(this._disp.flag0, g.CastleModel.userData.playerCrest);
  };
  DungeonSeasonMapScreenItem.prototype.setToolTip = function () {
    this._line1Content = {
      t: "",
      p: []
    };
    this._line2Content = {
      t: "",
      p: []
    };
    if (this._tMapNodeVO.ownerID != l.ClientConstNPCs.NPC_ID_THORNKING_COW_DUNGEON && this._tMapNodeVO.nodeID != a.TreasureMapsConst.NODE_ID_HIDDEN_COW_DUNGEON) {
      if (this._tMapNodeVO.isEndNode) {
        if (this.tMapNodeVO.eventID != s.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN || this._tMapNodeVO.isUnlocked) {
          this._line1Content.t = "dialog_seasonEvent_" + this.tMapNodeVO.eventID + "_FinalCastle";
        } else {
          this._line1Content.t = "Castle";
        }
      } else if (this._tMapNodeVO.isMoralBooster) {
        this._line1Content.t = "dialog_seasonEvent_" + this.tMapNodeVO.eventID + "_moraleBoosterDungeon";
      } else {
        this._line1Content.t = "dialog_seasonEvent_2_Dungeon";
      }
      if (this._tMapNodeVO.isUnlocked) {
        if (this._tMapNodeVO.isDefeated) {
          this._line2Content.t = "dialog_lowLevelUnderworld_location_conquered";
        } else {
          this._line2Content.t = "dialog_lowLevelUnderworld_location_attackable";
        }
      } else {
        this._line2Content.t = "dialog_lowLevelUnderworld_location_locked";
      }
      if (!this._tMapNodeVO.isUnockedByPortLevel && !this._tMapNodeVO.isUnlocked && this._tMapNodeVO.isEndNode && p.TMapHelper.isSeaQueenMap(this.tMapNodeVO.mapID)) {
        this._line2Content.t = "";
      }
    }
  };
  DungeonSeasonMapScreenItem.prototype.isMouseInteractive = function () {
    return e.prototype.isMouseInteractive.call(this) && this._tMapNodeVO.isUnlocked;
  };
  DungeonSeasonMapScreenItem.prototype.onClickMapItem = function (t) {
    if (this._isActive && !this._tMapNodeVO.hasCoolDown) {
      e.prototype.onClickMapItem.call(this, null);
      g.CastleModel.smartfoxClient.sendCommandVO(new c.C2SAttackInfoTreasureDungeonVO(this._tMapNodeVO.mapID, this._tMapNodeVO.nodeID));
    }
  };
  Object.defineProperty(DungeonSeasonMapScreenItem.prototype, "line1Content", {
    get: function () {
      return new r.LocalizedTextVO(this._line1Content.t, this._line1Content.p);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.BasicSimpleWorldMapItem.prototype, "line1Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonSeasonMapScreenItem.prototype, "line2Content", {
    get: function () {
      return new r.LocalizedTextVO(this._line2Content.t, this._line2Content.p);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.BasicSimpleWorldMapItem.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return DungeonSeasonMapScreenItem;
}(C.BasicSimpleWorldMapItem);
exports.DungeonSeasonMapScreenItem = m;
o.classImplementsInterfaces(m, "ITreasureMapItem", "IIngameUICapable", "IWorldmapTooltipData");