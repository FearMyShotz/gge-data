Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./58.js");
var l = require("./39.js");
var c = require("./4.js");
var u = require("./89.js");
var d = function (e) {
  function AchievementPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AchievementPanelButton, e);
  AchievementPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  Object.defineProperty(AchievementPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.btn_achiev;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AchievementPanelButton.prototype.getButtonTooltip = function () {
    if (a.EnvGlobalsHandler.globals.isOnSpecialServer) {
      return "dialog_accountInfo_notAvailable_tooltip";
    } else if (c.CastleModel.userData.userLevel < r.ClientConstLevelRestrictions.MIN_LEVEL_ACHIEVEMENTS) {
      return s.Localize.text(l.ClientConstTextIds.LEVEL_NEEDED, [r.ClientConstLevelRestrictions.MIN_LEVEL_ACHIEVEMENTS]);
    } else {
      return "panel_action_achievement";
    }
  };
  AchievementPanelButton.prototype.isButtonEnabled = function () {
    return !a.EnvGlobalsHandler.globals.isOnSpecialServer && c.CastleModel.userData.userLevel >= r.ClientConstLevelRestrictions.MIN_LEVEL_ACHIEVEMENTS;
  };
  AchievementPanelButton.prototype.onButtonClicked = function () {
    p.CastleComponent.dialogHandler.registerDefaultDialogs(h.CastleAchievementDialog);
  };
  return AchievementPanelButton;
}(u.APanelButton);
exports.AchievementPanelButton = d;
var p = require("./14.js");
var h = require("./4078.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");