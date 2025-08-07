Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./58.js");
var l = require("./39.js");
var c = require("./4.js");
var u = require("./670.js");
var d = require("./89.js");
var p = function (e) {
  function ManagementPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ManagementPanelButton, e);
  ManagementPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  Object.defineProperty(ManagementPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Management;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ManagementPanelButton.prototype.getButtonTooltip = function () {
    if (c.CastleModel.userData.userLevel < r.ClientConstLevelRestrictions.MIN_LEVEL_ECONOMY) {
      return s.Localize.text(l.ClientConstTextIds.LEVEL_NEEDED, [r.ClientConstLevelRestrictions.MIN_LEVEL_ECONOMY]);
    } else if (this.isButtonEnabled()) {
      return "dialog_alliance_management";
    } else {
      return "dialog_management_title_inactive";
    }
  };
  ManagementPanelButton.prototype.isButtonEnabled = function () {
    return h.IsoHelper.view.isInIsoScreen && g.CastleComponent.layoutManager.isInMyCastle && !g.CastleComponent.layoutManager.isInMyOccupiedCastle && c.CastleModel.kingdomData.activeKingdomID != a.FactionConst.KINGDOM_ID && c.CastleModel.userData.userLevel >= r.ClientConstLevelRestrictions.MIN_LEVEL_ECONOMY;
  };
  ManagementPanelButton.prototype.onButtonClicked = function () {
    var e = c.CastleModel.userData.castleList.getCastleVOByID(c.CastleModel.areaData.activeArea.areaId, c.CastleModel.kingdomData.activeKingdomID);
    if (e) {
      g.CastleComponent.dialogHandler.registerDefaultDialogs(C.CastleManagementDialog, new u.CastleManagementDialogProperties(e));
    }
  };
  return ManagementPanelButton;
}(d.APanelButton);
exports.ManagementPanelButton = p;
var h = require("./46.js");
var g = require("./14.js");
var C = require("./671.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");