Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./58.js");
var s = require("./4.js");
var r = require("./89.js");
var l = function (e) {
  function OverviewPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OverviewPanelButton, e);
  OverviewPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  Object.defineProperty(OverviewPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_UnitList;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  OverviewPanelButton.prototype.isButtonEnabled = function () {
    return s.CastleModel.userData.userLevel >= a.ClientConstLevelRestrictions.MIN_LEVEL_ECONOMY;
  };
  OverviewPanelButton.prototype.getButtonTooltip = function () {
    return "panel_action_overview";
  };
  OverviewPanelButton.prototype.onButtonClicked = function () {
    c.CastleComponent.dialogHandler.registerDefaultDialogs(u.CastleListDetailOverviewDialog);
  };
  return OverviewPanelButton;
}(r.APanelButton);
exports.OverviewPanelButton = l;
var c = require("./14.js");
var u = require("./1040.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");