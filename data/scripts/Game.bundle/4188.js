Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./6.js");
var d = require("./28.js");
var p = require("./4.js");
var h = require("./619.js");
var g = function (e) {
  function ButtonAttackLandmarkComponent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ButtonAttackLandmarkComponent, e);
  ButtonAttackLandmarkComponent.prototype.initAttackButton = function (t) {
    if (this._worldMapObjectVO) {
      this._button.visible = this._worldMapObjectVO.canBeAttacked();
      this._button.enableButton = true;
      if (s.instanceOfClass(this._worldMapObjectVO, "UpgradableLandmarkMapobjectVO")) {
        switch (this._worldMapObjectVO.areaType) {
          case c.WorldConst.AREA_TYPE_MONUMENT:
            this._button.gotoAndStop(1);
            break;
          case c.WorldConst.AREA_TYPE_LABORATORY:
            this._button.gotoAndStop(2);
        }
        e.prototype.initAttackButton.call(this, t);
      } else {
        this._button.visible = false;
      }
      this.initTooltipsAndEnable(this._worldMapObjectVO);
    }
  };
  ButtonAttackLandmarkComponent.prototype.initTooltipsAndEnable = function (e) {
    if (p.CastleModel.userData.isUserInMyAlliance(e.ownerInfo)) {
      this._button.visible = false;
      this._button.enableButton = false;
    } else if (u.int(p.CastleModel.allianceData.getStatusByAlliance(e.ownerInfo.allianceID)) == r.AllianceConst.DIPLOMACY_REAL_ALLIED && p.CastleModel.userData.allianceID != -1) {
      this._button.toolTipText = "cantAttackAlliedPlayer";
      this._button.enableButton = false;
    } else if (e.remainingCooldownTimeInSeconds > 0) {
      var t = o.TimeStringHelper.getShortTimeString(e.remainingCooldownTimeInSeconds * d.ClientConstTime.SEC_2_MILLISEC, o.TimeStringHelper.ONE_TIME_FORMAT);
      this._button.toolTipText = {
        t: "castleHasCooldown",
        p: [t]
      };
      this._button.enableButton = false;
    } else if (e.kingdomID == l.WorldClassic.KINGDOM_ID && e.ownerInfo.remainingRelocateDuration > 0) {
      var i = o.TimeStringHelper.getShortTimeString(e.ownerInfo.remainingRelocateDuration * d.ClientConstTime.SEC_2_MILLISEC, o.TimeStringHelper.ONE_TIME_FORMAT);
      this._button.toolTipText = {
        t: "relocate_attackprotection",
        p: [i]
      };
      this._button.enableButton = false;
    } else {
      this._button.enableButton = !e.isOwnMapobject;
    }
  };
  Object.defineProperty(ButtonAttackLandmarkComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_military_menu_village";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.ButtonAttackComponent.prototype, "infoTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ButtonAttackLandmarkComponent;
}(h.ButtonAttackComponent);
exports.ButtonAttackLandmarkComponent = g;
a.classImplementsInterfaces(g, "IWorldMapObjectRingmenuButtonComponent");