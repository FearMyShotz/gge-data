Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./1078.js");
var r = require("./520.js");
var l = function (e) {
  function ObstacleSeasonMapScreenItem(t, i) {
    return e.call(this, t, i) || this;
  }
  n.__extends(ObstacleSeasonMapScreenItem, e);
  ObstacleSeasonMapScreenItem.prototype.setItem = function () {
    if (this._tMapNodeVO.isDefeated) {
      this._disp.gotoAndStop(2);
    } else if (this._tMapNodeVO.isUnockedByPortLevel) {
      this._disp.gotoAndStop(1);
    } else {
      this._disp.gotoAndStop(3);
    }
  };
  ObstacleSeasonMapScreenItem.prototype.setToolTip = function () {
    this._line1Content = {
      t: "",
      p: []
    };
    this._line2Content = {
      t: "",
      p: []
    };
    this._line1Content.t = "dialog_seasonEvent_73_Bridge";
    this._line2Content.t = this.getBridgeTextID();
  };
  ObstacleSeasonMapScreenItem.prototype.getBridgeTextID = function () {
    if (this._tMapNodeVO.isUnlocked && !this._tMapNodeVO.isDefeated) {
      return "dialog_lowLevelUnderworld_location_repairBridge";
    } else {
      return "";
    }
  };
  ObstacleSeasonMapScreenItem.prototype.onClickMapItem = function (t) {
    e.prototype.onClickMapItem.call(this, null);
    c.CastleDialogHandler.getInstance().registerDefaultDialogs(u.CastleSeasonRepairBridgeDialog, new s.CastleSeasonBaseRepairDialogProperties(this._tMapNodeVO, "dialog_repairBridge"));
  };
  Object.defineProperty(ObstacleSeasonMapScreenItem.prototype, "line1Content", {
    get: function () {
      return new a.LocalizedTextVO(this._line1Content.t);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BasicSimpleWorldMapItem.prototype, "line1Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ObstacleSeasonMapScreenItem.prototype, "line2Content", {
    get: function () {
      return new a.LocalizedTextVO(this._line2Content.t);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BasicSimpleWorldMapItem.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ObstacleSeasonMapScreenItem;
}(r.BasicSimpleWorldMapItem);
exports.ObstacleSeasonMapScreenItem = l;
var c = require("./9.js");
var u = require("./4153.js");
o.classImplementsInterfaces(l, "ITreasureMapItem", "IIngameUICapable", "IWorldmapTooltipData");