Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./4.js");
var c = require("./4179.js");
var u = function (e) {
  function ButtonAlienRerollComponent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ButtonAlienRerollComponent, e);
  Object.defineProperty(ButtonAlienRerollComponent.prototype, "targetWMO", {
    set: function (e) {
      this._worldMapObjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  ButtonAlienRerollComponent.prototype.initAsRingmenuButton = function () {
    this._button.enableButton = true;
    if (r.instanceOfClass(this._worldMapObjectVO, "AAlienInvasionMapobjectVO")) {
      var e = a.castAs(l.CastleModel.specialEventData.getActiveEventByEventId(this._worldMapObjectVO.eventType), "AAlienInvasionEventVO");
      if (e && e.rerollCurrencyKeys.length > 0 && e.useReroll) {
        this._button.visible = r.instanceOfClass(this._worldMapObjectVO, "AAlienInvasionMapobjectVO");
        var t = l.CastleModel.armyData.getMyMovementsToAreaPos(this._worldMapObjectVO).length > 0;
        var i = l.CastleModel.armyData.getMovementsFromAreaPos(this._worldMapObjectVO).length > 0;
        if (this.hasLevelForReroll) {
          if (t) {
            this._button.enableButton = false;
            this._button.toolTipText = "ringmenu_dethrone_attack";
            return;
          } else if (i) {
            this._button.enableButton = false;
            this._button.toolTipText = "ringmenu_dethrone_attackOnPlayer";
            return;
          } else {
            this._button.toolTipText = null;
            return;
          }
        } else {
          this._button.enableButton = false;
          this._button.toolTipText = new o.LocalizedTextVO("needLevel", [70]);
          return;
        }
      }
    }
    this._button.visible = false;
  };
  Object.defineProperty(ButtonAlienRerollComponent.prototype, "hasLevelForReroll", {
    get: function () {
      return l.CastleModel.userData.level >= 70;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonAlienRerollComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_dethrone";
    },
    enumerable: true,
    configurable: true
  });
  ButtonAlienRerollComponent.prototype.onClick = function () {
    d.CastleDialogHandler.getInstance().registerDialogs(p.CastleRerollAlienDialog, new c.CastleRerollAlienDialogProperties(this._worldMapObjectVO));
  };
  return ButtonAlienRerollComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonAlienRerollComponent = u;
var d = require("./9.js");
var p = require("./4180.js");
s.classImplementsInterfaces(u, "IWorldMapObjectRingmenuButtonComponent");