Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./58.js");
var r = require("./39.js");
var l = require("./4.js");
var c = require("./608.js");
var u = require("./89.js");
var d = function (e) {
  function FamePanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FamePanelButton, e);
  FamePanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  Object.defineProperty(FamePanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.button_fame;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FamePanelButton.prototype.isButtonEnabled = function () {
    return l.CastleModel.userData.userLevel >= s.ClientConstLevelRestrictions.MIN_LEVEL_FAME;
  };
  FamePanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "dialog_fame_title";
    } else {
      return a.Localize.text(r.ClientConstTextIds.LEVEL_NEEDED, [s.ClientConstLevelRestrictions.MIN_LEVEL_FAME]);
    }
  };
  FamePanelButton.prototype.onButtonClicked = function () {
    p.CastleComponent.dialogHandler.registerDefaultDialogs(h.CastleTitleMainDialog, new c.CastleTitleMainDialogProperties());
  };
  return FamePanelButton;
}(u.APanelButton);
exports.FamePanelButton = d;
var p = require("./14.js");
var h = require("./609.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");