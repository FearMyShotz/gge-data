Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./71.js");
var s = require("./4.js");
var r = require("./89.js");
var l = function (e) {
  function RelicUpgradePanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RelicUpgradePanelButton, e);
  RelicUpgradePanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    c.CastleComponent.controller.addEventListener(a.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onAreaInfoUpdated));
  };
  RelicUpgradePanelButton.prototype.removeEventListener = function () {
    c.CastleComponent.controller.removeEventListener(a.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onAreaInfoUpdated));
    e.prototype.removeEventListener.call(this);
  };
  Object.defineProperty(RelicUpgradePanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Relicus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RelicUpgradePanelButton.prototype.getButtonTooltip = function () {
    return "hud_button_relicEnchanter_relicEnchanterUpgrade_tooltip";
  };
  RelicUpgradePanelButton.prototype.isButtonVisible = function () {
    return s.CastleModel.equipData.hasRelicEnchanter;
  };
  RelicUpgradePanelButton.prototype.onButtonClicked = function () {
    c.CastleComponent.dialogHandler.registerDefaultDialogs(u.RelicUpgradeDialog);
  };
  RelicUpgradePanelButton.prototype.onAreaInfoUpdated = function (e) {
    if (!this.isButtonVisible()) {
      this.update();
    }
  };
  return RelicUpgradePanelButton;
}(r.APanelButton);
exports.RelicUpgradePanelButton = l;
var c = require("./14.js");
var u = require("./797.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");