Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./58.js");
var l = require("./4.js");
var c = require("./236.js");
var u = require("./707.js");
var d = function (e) {
  function ButtonDefenceComponent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ButtonDefenceComponent, e);
  ButtonDefenceComponent.prototype.onClick = function () {
    if (l.CastleModel.userData.userCanOpenDefenceScreen) {
      p.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleDefenceDialog, new u.CastleDefenceDialogProperties(this._worldMapObjectVO, a.DefenseConst.TOOL_TYPE_WALL));
    } else {
      p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleCharacterYesNoOKDialog, new c.CastleCharacterYesNoOKDialogProperties(s.Localize.text("generic_alert_watchout"), s.Localize.text("panel_action_levelBlockDefencescreen"), 4, null, null, false));
    }
  };
  ButtonDefenceComponent.prototype.init = function () {
    e.prototype.init.call(this);
    this._button.enableButton = l.CastleModel.userData.hasLevelFor(r.ClientConstLevelRestrictions.MIN_LEVEL_DEFENCE_DIALOG);
  };
  Object.defineProperty(ButtonDefenceComponent.prototype, "targetWMO", {
    set: function (e) {
      this._worldMapObjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  ButtonDefenceComponent.prototype.initAsActionPanelButton = function () {
    this._button.toolTipText = "panel_action_defence";
  };
  ButtonDefenceComponent.prototype.initAsRingmenuButton = function () {
    this._button.visible = this._worldMapObjectVO.canChangeDefenceOnWorldmap;
  };
  Object.defineProperty(ButtonDefenceComponent.prototype, "infoTextId", {
    get: function () {
      return "Defence";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonDefenceComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonDefenceComponent = d;
var p = require("./9.js");
var h = require("./238.js");
var g = require("./426.js");
o.classImplementsInterfaces(d, "IWorldMapObjectRingmenuButtonComponent");