Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./58.js");
var r = require("./4.js");
var l = require("./136.js");
var c = require("./89.js");
var u = function (e) {
  function AlliancePanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AlliancePanelButton, e);
  AlliancePanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  Object.defineProperty(AlliancePanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Alliance;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AlliancePanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "panel_multiinfo_alliance";
    } else {
      return a.Localize.text("panel_shop_needQuestProgress", [s.ClientConstLevelRestrictions.MIN_LEVEL_ALLIANCE]);
    }
  };
  AlliancePanelButton.prototype.isButtonEnabled = function () {
    return r.CastleModel.userData.userLevel >= s.ClientConstLevelRestrictions.MIN_LEVEL_ALLIANCE;
  };
  AlliancePanelButton.prototype.onButtonClicked = function () {
    if (r.CastleModel.userData.isInAlliance && r.CastleModel.allianceData.myAllianceVO) {
      d.CastleComponent.dialogHandler.registerDefaultDialogs(h.CastleAllianceDialog, new l.CastleAllianceDialogProperties());
    } else {
      d.CastleComponent.dialogHandler.registerDefaultDialogs(p.CastleAllianceTeaserDialog);
    }
  };
  return AlliancePanelButton;
}(c.APanelButton);
exports.AlliancePanelButton = u;
var d = require("./14.js");
var p = require("./388.js");
var h = require("./125.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");