Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./58.js");
var s = require("./53.js");
var r = require("./4.js");
var l = require("./447.js");
var c = require("./988.js");
var u = require("./89.js");
var d = function (e) {
  function FusionForgePanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FusionForgePanelButton, e);
  FusionForgePanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    p.CastleComponent.controller.addEventListener(l.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onEnergyUpdated));
    p.CastleComponent.controller.addEventListener(l.FusionForgeEvent.ON_FORGE_ENERGY_RECHARGED, this.bindFunction(this.onEnergyUpdated));
    this.listenOnXPChanged();
  };
  FusionForgePanelButton.prototype.removeEventListener = function () {
    p.CastleComponent.controller.removeEventListener(l.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onEnergyUpdated));
    p.CastleComponent.controller.removeEventListener(l.FusionForgeEvent.ON_FORGE_ENERGY_RECHARGED, this.bindFunction(this.onEnergyUpdated));
    e.prototype.removeEventListener.call(this);
  };
  FusionForgePanelButton.prototype.updateOnVisible = function () {
    this.setHighlight(u.APanelButton.HIGHLIGHT_TYPE_YELLOW, r.CastleModel.fusionForgeData.hasAnyForgeFullEnergy() && this.isButtonEnabled());
  };
  Object.defineProperty(FusionForgePanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_fusionForge;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FusionForgePanelButton.prototype.isButtonEnabled = function () {
    return r.CastleModel.userData.userLevel >= a.ClientConstLevelRestrictions.MIN_LEVEL_FUSION_FORGE && !s.ABGHelper.isOnABGServer && !FusionForgePanelButton.castleEnv.isCrossplay;
  };
  FusionForgePanelButton.prototype.getButtonTooltip = function () {
    if (s.ABGHelper.isOnABGServer || FusionForgePanelButton.castleEnv.isCrossplay) {
      return "dialog_accountInfo_notAvailable_tooltip";
    } else if (this.isButtonEnabled()) {
      return "fusion";
    } else {
      return "requiresLevel70_tt";
    }
  };
  FusionForgePanelButton.prototype.onEnergyUpdated = function (e) {
    this.update();
  };
  FusionForgePanelButton.prototype.onButtonClicked = function () {
    p.CastleComponent.dialogHandler.registerDefaultDialogs(h.FusionForgeHubDialog, new c.FusionForgeHubDialogProperties());
  };
  return FusionForgePanelButton;
}(u.APanelButton);
exports.FusionForgePanelButton = d;
var p = require("./14.js");
var h = require("./989.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");