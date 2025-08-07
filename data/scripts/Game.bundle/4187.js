Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./18.js");
var c = require("./4.js");
var u = function (e) {
  function ButtonAttackKingstowerComponent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ButtonAttackKingstowerComponent, e);
  Object.defineProperty(ButtonAttackKingstowerComponent.prototype, "targetWMO", {
    set: function (e) {
      this._worldMapObjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  ButtonAttackKingstowerComponent.prototype.initAsRingmenuButton = function () {
    if (this._worldMapObjectVO) {
      if (a.instanceOfClass(this._worldMapObjectVO, "KingstowerMapobjectVO")) {
        if (r.int(c.CastleModel.allianceData.getStatusByAlliance(this._worldMapObjectVO.ownerInfo.allianceID)) == s.AllianceConst.DIPLOMACY_REAL_ALLIED && c.CastleModel.userData.allianceID != -1) {
          this._button.toolTipText = "cantAttackAlliedPlayer";
          this._button.visible = true;
          this._button.enableButton = false;
        } else {
          this._button.toolTipText = null;
          this._button.visible = this._worldMapObjectVO.canBeAttacked();
          this._button.enableButton = true;
        }
      } else {
        this._button.visible = false;
      }
    }
  };
  Object.defineProperty(ButtonAttackKingstowerComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_military_menu_village";
    },
    enumerable: true,
    configurable: true
  });
  ButtonAttackKingstowerComponent.prototype.onClick = function () {
    d.AttackHelper.executeAttackCommand(this._worldMapObjectVO, l.ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK, null);
  };
  return ButtonAttackKingstowerComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonAttackKingstowerComponent = u;
var d = require("./250.js");
o.classImplementsInterfaces(u, "IWorldMapObjectRingmenuButtonComponent");