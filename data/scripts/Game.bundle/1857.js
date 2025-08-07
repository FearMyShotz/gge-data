Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./58.js");
var s = require("./4.js");
var r = require("./1318.js");
var l = require("./89.js");
var c = function (e) {
  function MovementsPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MovementsPanelButton, e);
  Object.defineProperty(MovementsPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Movements;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MovementsPanelButton.prototype.isButtonEnabled = function () {
    return s.CastleModel.userData.hasLevelFor(a.ClientConstLevelRestrictions.MIN_LEVEL_MOVEMENTS);
  };
  MovementsPanelButton.prototype.getButtonTooltip = function () {
    return "dialog_moveOverview_title";
  };
  MovementsPanelButton.prototype.onButtonClicked = function () {
    u.CastleComponent.dialogHandler.registerDefaultDialogs(d.CastleMovementOverviewDialog, new r.CastleMovementOverviewDialogProperties());
  };
  return MovementsPanelButton;
}(l.APanelButton);
exports.MovementsPanelButton = c;
var u = require("./14.js");
var d = require("./1319.js");
o.classImplementsInterfaces(c, "ICollectableRendererList");