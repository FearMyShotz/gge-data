Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./18.js");
var s = require("./27.js");
var r = require("./1876.js");
var l = function (e) {
  function ButtonConquerAttackComponent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ButtonConquerAttackComponent, e);
  ButtonConquerAttackComponent.prototype.initAsRingmenuButton = function () {
    this._button.visible = this._worldMapObjectVO.canBeAttackedAndConquered();
    if (this._button.visible && (this._button.enableButton = true, this._button.toolTipText = null, this.determineButtonEnablement(), !this._worldMapObjectVO.ignoresPeaceMode && this._worldMapObjectVO.canBeAttackedButHasPeacemode())) {
      this._button.enableButton = false;
      var e = s.CastleTimeStringHelper.getCantAttackTimeString(this._worldMapObjectVO.ownerInfo.remainingPeaceTime);
      this._button.toolTipText = {
        t: "playerHasNoobProtection",
        p: [e]
      };
    }
  };
  ButtonConquerAttackComponent.prototype.onClick = function () {
    c.AttackHelper.executeAttackCommand(this._worldMapObjectVO, a.ClientConstCastle.ACTION_TYPE_CONQUERATTACK, null);
  };
  Object.defineProperty(ButtonConquerAttackComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_conquer";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ButtonConquerComponent.prototype, "infoTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ButtonConquerAttackComponent;
}(r.ButtonConquerComponent);
exports.ButtonConquerAttackComponent = l;
var c = require("./250.js");
o.classImplementsInterfaces(l, "IWorldMapObjectRingmenuButtonComponent");