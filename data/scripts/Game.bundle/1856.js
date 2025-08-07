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
var u = require("./705.js");
var d = require("./89.js");
var p = function (e) {
  function DefencePanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DefencePanelButton, e);
  DefencePanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  Object.defineProperty(DefencePanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Defence;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DefencePanelButton.prototype.isButtonEnabled = function () {
    return (h.CastleComponent.layoutManager.isInMyCastle || !!l.CastleModel.areaData && !!l.CastleModel.areaData.activeArea && !!l.CastleModel.areaData.activeAreaInfo && l.CastleModel.areaData.activeAreaInfo.isConqueredByMe) && l.CastleModel.userData.hasLevelFor(r.ClientConstLevelRestrictions.MIN_LEVEL_DEFENCE_DIALOG);
  };
  DefencePanelButton.prototype.getButtonTooltip = function () {
    return "panel_action_defence";
  };
  DefencePanelButton.prototype.onButtonClicked = function () {
    if (l.CastleModel.userData.userCanOpenDefenceScreen) {
      h.CastleComponent.dialogHandler.registerDefaultDialogs(C.CastleDefenceDialog, new u.CastleDefenceDialogProperties(l.CastleModel.areaData.activeAreaInfo, a.DefenseConst.TOOL_TYPE_WALL));
    } else {
      h.CastleComponent.dialogHandler.registerDefaultDialogs(g.CastleCharacterYesNoOKDialog, new c.CastleCharacterYesNoOKDialogProperties(s.Localize.text("generic_alert_watchout"), s.Localize.text("panel_action_levelBlockDefencescreen"), 4, null, null, false));
    }
  };
  return DefencePanelButton;
}(d.APanelButton);
exports.DefencePanelButton = p;
var h = require("./14.js");
var g = require("./238.js");
var C = require("./426.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");