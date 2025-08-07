Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./18.js");
var s = require("./4.js");
var r = require("./525.js");
var l = function (e) {
  function ButtonSendTroopsComponent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ButtonSendTroopsComponent, e);
  Object.defineProperty(ButtonSendTroopsComponent.prototype, "targetWMO", {
    set: function (e) {
      this._worldMapObjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  ButtonSendTroopsComponent.prototype.initAsRingmenuButton = function () {
    this._button.visible = this._worldMapObjectVO.canBeTroupsSended();
    if (d.instanceOfClass(this._worldMapObjectVO, "FactionInteractiveMapobjectVO") && s.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps.length == 0) {
      this._button.enableButton = false;
      this._button.toolTipText = "panel_action_castle_spectator";
    }
  };
  ButtonSendTroopsComponent.prototype.onClick = function () {
    c.CastleDialogHandler.getInstance().registerDefaultDialogs(u.CastleStartAttackDialog, new r.CastleStartAttackDialogProperties(this._worldMapObjectVO, a.ClientConstCastle.ACTION_TYPE_SENDTROUPS));
  };
  Object.defineProperty(ButtonSendTroopsComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_sendTroups";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonSendTroopsComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonSendTroopsComponent = l;
var c = require("./9.js");
var u = require("./395.js");
o.classImplementsInterfaces(l, "IWorldMapObjectRingmenuButtonComponent");
var d = require("./1.js");