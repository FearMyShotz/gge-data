Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./936.js");
var u = require("./21.js");
var d = require("./273.js");
var p = require("./4.js");
var h = require("./519.js");
var g = require("./292.js");
var C = function (e) {
  function VillageSeasonMapScreenItem(t, i) {
    return e.call(this, t, i) || this;
  }
  n.__extends(VillageSeasonMapScreenItem, e);
  VillageSeasonMapScreenItem.prototype.setItem = function () {
    if (this._tMapNodeVO.isUnlocked) {
      if (this._tMapNodeVO.hasCoolDown || this._tMapNodeVO.isDefeated) {
        this._disp.gotoAndStop(2);
        this.showPlayerCrest();
      } else {
        this._disp.gotoAndStop(1);
      }
    } else {
      this._disp.gotoAndStop(3);
    }
    this.showResourceFrame();
    for (var e = 0; e < 3; e++) {
      if (this._disp["ship" + e]) {
        this._disp["ship" + e].gotoAndStop(this._disp.currentFrame + 1);
      }
    }
  };
  VillageSeasonMapScreenItem.prototype.addEventListeners = function () {
    e.prototype.addEventListeners.call(this);
    p.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  VillageSeasonMapScreenItem.prototype.removeEventListeners = function () {
    e.prototype.removeEventListeners.call(this);
    p.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  VillageSeasonMapScreenItem.prototype.onTimer = function (e) {
    if (this._tMapNodeVO) {
      this.setItem();
    }
  };
  VillageSeasonMapScreenItem.prototype.showPlayerCrest = function () {
    if (this._disp.mc_flag) {
      g.FlagHelper.colorFlag(this._disp.mc_flag, p.CastleModel.userData.playerCrest);
    }
  };
  VillageSeasonMapScreenItem.prototype.showResourceFrame = function () {
    if (this._tMapNodeVO.capturedProduction) {
      this._disp.mc_resources.gotoAndStop(this._tMapNodeVO.capturedProduction.productionType);
    }
  };
  VillageSeasonMapScreenItem.prototype.onMouseOver = function (t) {
    if (this._tMapNodeVO.hasCoolDown || this._tMapNodeVO.isDefeated) {
      this.setToolTip();
    }
    e.prototype.onMouseOver.call(this, t);
  };
  VillageSeasonMapScreenItem.prototype.setToolTip = function () {
    this._line1Content = {
      t: "",
      p: []
    };
    this._line2Content = {
      t: "",
      p: []
    };
    this._line3Content = {
      t: "",
      p: []
    };
    if (d.TMapHelper.isThornKingMap(this._tMapNodeVO.mapID)) {
      this._line1Content.t = "village";
      this._line2Content.t = this.getVillageLevelString();
    }
    if (d.TMapHelper.isSeaQueenMap(this._tMapNodeVO.mapID)) {
      this._line1Content.t = "dialog_seasonEvent_4_konvy";
      this._line2Content.t = this.getVillageLevelString();
    }
    if (d.TMapHelper.isUnderworldMap(this._tMapNodeVO.mapID)) {
      this._line1Content.t = "dialog_seasonEvent_64_village";
      this._line2Content.t = this.getVillageLevelString();
    }
    if (this._tMapNodeVO.isUnlocked) {
      if (this._tMapNodeVO.hasCoolDown) {
        if (d.TMapHelper.isThornKingMap(this._tMapNodeVO.mapID)) {
          this._line3Content.t = "seasonVillageHasCooldown";
          this._line3Content.p = [o.TimeStringHelper.getTimeToString(this._tMapNodeVO.coolDownInRemainingSeconds, o.TimeStringHelper.TWO_TIME_FORMAT, r.Localize.text)];
        }
        if (d.TMapHelper.isSeaQueenMap(this._tMapNodeVO.mapID)) {
          this._line3Content.t = "cooldownX_colon";
          this._line3Content.p = [o.TimeStringHelper.getTimeToString(this._tMapNodeVO.coolDownInRemainingSeconds, o.TimeStringHelper.TWO_TIME_FORMAT, r.Localize.text)];
        }
        if (d.TMapHelper.isUnderworldMap(this._tMapNodeVO.mapID)) {
          this._line3Content.t = "seasonVillageHasCooldown64";
          this._line3Content.p = [o.TimeStringHelper.getTimeToString(this._tMapNodeVO.coolDownInRemainingSeconds, o.TimeStringHelper.TWO_TIME_FORMAT, r.Localize.text)];
        }
      } else if (this._tMapNodeVO.isDefeated) {
        this._line3Content.t = "dialog_lowLevelUnderworld_location_conquered";
      } else {
        this._line3Content.t = "dialog_lowLevelUnderworld_location_attackable";
      }
    } else {
      this._line3Content.t = "dialog_lowLevelUnderworld_location_locked";
    }
  };
  VillageSeasonMapScreenItem.prototype.getCapturedProductionString = function () {
    return r.Localize.text("dialog_seasonEvent_" + this.tMapNodeVO.eventID + "_village_" + this._tMapNodeVO.capturedProduction.productionType, [this._tMapNodeVO.capturedProduction.capturedProductionValue]);
  };
  VillageSeasonMapScreenItem.prototype.onClickMapItem = function (t) {
    if (this._isActive && !this._tMapNodeVO.hasCoolDown) {
      p.CastleModel.smartfoxClient.sendCommandVO(new c.C2SAttackInfoTreasureDungeonVO(this._tMapNodeVO.mapID, this._tMapNodeVO.nodeID));
      e.prototype.onClickMapItem.call(this, null);
    }
  };
  VillageSeasonMapScreenItem.prototype.getVillageLevelString = function () {
    return r.Localize.text("level_placeholder", [this._tMapNodeVO.villageSize + 1]);
  };
  VillageSeasonMapScreenItem.prototype.getVillageSizeString = function () {
    var e = l.int(this._tMapNodeVO.villageSize);
    if (e < 3) {
      return "small";
    } else if (e >= 3 && e < 6) {
      return "medium";
    } else {
      return "large";
    }
  };
  Object.defineProperty(VillageSeasonMapScreenItem.prototype, "line1Content", {
    get: function () {
      return new s.LocalizedTextVO(this._line1Content.t, this._line1Content.p);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.BasicSimpleWorldMapItem.prototype, "line1Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageSeasonMapScreenItem.prototype, "line2Content", {
    get: function () {
      return new s.LocalizedTextVO(this._line2Content.t, this._line2Content.p);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.BasicSimpleWorldMapItem.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageSeasonMapScreenItem.prototype, "line3Content", {
    get: function () {
      return new s.LocalizedTextVO(this._line3Content.t, this._line3Content.p);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.BasicSimpleWorldMapItem.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return VillageSeasonMapScreenItem;
}(h.BasicSimpleWorldMapItem);
exports.VillageSeasonMapScreenItem = C;
a.classImplementsInterfaces(C, "ITreasureMapItem", "IIngameUICapable", "IWorldmapTooltipData");