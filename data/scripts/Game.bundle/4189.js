Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./18.js");
var u = require("./28.js");
var d = require("./4.js");
var p = function (e) {
  function ButtonAttackResourceIsleComponent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ButtonAttackResourceIsleComponent, e);
  Object.defineProperty(ButtonAttackResourceIsleComponent.prototype, "targetWMO", {
    set: function (e) {
      this._worldMapObjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  ButtonAttackResourceIsleComponent.prototype.initAsRingmenuButton = function () {
    if (s.instanceOfClass(this._worldMapObjectVO, "ResourceIsleMapobjectVO")) {
      var e = this._worldMapObjectVO.isOwnMapobject;
      var t = d.CastleModel.userData.isUserInMyAlliance(this._worldMapObjectVO.ownerInfo);
      this._button.visible = !e && !t;
      if (this._button.visible) {
        this._button.enableButton = true;
        if (this._worldMapObjectVO.ownerInfo) {
          if (l.int(d.CastleModel.allianceData.getStatusByAlliance(this._worldMapObjectVO.ownerInfo.allianceID)) == r.AllianceConst.DIPLOMACY_REAL_ALLIED && d.CastleModel.userData.allianceID != -1) {
            this._button.toolTipText = "cantAttackAlliedPlayer";
            this._button.enableButton = false;
          } else if (this._worldMapObjectVO.remainingCooldownTimeInSeconds > 0) {
            var i = o.TimeStringHelper.getShortTimeString(this._worldMapObjectVO.remainingCooldownTimeInSeconds * u.ClientConstTime.SEC_2_MILLISEC, o.TimeStringHelper.ONE_TIME_FORMAT);
            this._button.toolTipText = {
              t: "castleHasCooldown",
              p: [i]
            };
            this._button.enableButton = false;
          }
        }
      }
    } else {
      this._button.visible = false;
    }
  };
  Object.defineProperty(ButtonAttackResourceIsleComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_military_menu_village";
    },
    enumerable: true,
    configurable: true
  });
  ButtonAttackResourceIsleComponent.prototype.onClick = function () {
    h.AttackHelper.executeAttackCommand(this._worldMapObjectVO, c.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK, null);
  };
  return ButtonAttackResourceIsleComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonAttackResourceIsleComponent = p;
var h = require("./250.js");
a.classImplementsInterfaces(p, "IWorldMapObjectRingmenuButtonComponent");