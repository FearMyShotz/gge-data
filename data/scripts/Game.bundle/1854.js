Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./18.js");
var l = require("./92.js");
var c = require("./4.js");
var u = require("./236.js");
var d = require("./263.js");
var p = require("./89.js");
var h = function (e) {
  function BuildToolsPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BuildToolsPanelButton, e);
  BuildToolsPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    _.CastleComponent.controller.addEventListener(l.IsoEvent.ON_BUILDING_CONSTRUCTION_DONE, this.bindFunction(this.onBuildingCompleted));
  };
  BuildToolsPanelButton.prototype.removeEventListener = function () {
    _.CastleComponent.controller.removeEventListener(l.IsoEvent.ON_BUILDING_CONSTRUCTION_DONE, this.bindFunction(this.onBuildingCompleted));
    e.prototype.removeEventListener.call(this);
  };
  Object.defineProperty(BuildToolsPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_BuildTools;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BuildToolsPanelButton.prototype.isButtonEnabled = function () {
    return _.CastleComponent.layoutManager.isInMyCastle && (C.Iso.data.objects.provider.hasFunctionalBuildingByType(g.IsoObjectEnum.WORKSHOP) || C.Iso.data.objects.provider.hasFunctionalBuildingByType(g.IsoObjectEnum.D_WORKSHOP));
  };
  BuildToolsPanelButton.prototype.isButtonVisible = function () {
    return c.CastleModel.kingdomData.activeKingdomID != a.FactionConst.KINGDOM_ID;
  };
  BuildToolsPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "panel_action_buildTools";
    } else {
      return "alert_never_available";
    }
  };
  BuildToolsPanelButton.prototype.onButtonClicked = function () {
    if (c.CastleModel.militaryData.isBuildingCategoryAllowed(r.ClientConstCastle.UNIT_BUILDINGTYPE_DWORKSHOP) || c.CastleModel.militaryData.isBuildingCategoryAllowed(r.ClientConstCastle.UNIT_BUILDINGTYPE_WORKSHOP)) {
      _.CastleComponent.dialogHandler.registerDefaultDialogs(f.CastleRecruitDialog, new d.CastleRecruitDialogProperties(r.ClientConstCastle.UNIT_CATEGORY_TOOLS));
    } else {
      _.CastleComponent.dialogHandler.registerDefaultDialogs(m.CastleCharacterYesNoOKDialog, new u.CastleCharacterYesNoOKDialogProperties(s.Localize.text("generic_alert_watchout"), s.Localize.text("alert_noWorkshop_copy"), 4, null, null, false));
    }
  };
  BuildToolsPanelButton.prototype.onBuildingCompleted = function (e) {
    var t = e.params[0];
    if (t.objectType == g.IsoObjectEnum.WORKSHOP || t.objectType == g.IsoObjectEnum.D_WORKSHOP) {
      this.update();
    }
  };
  return BuildToolsPanelButton;
}(p.APanelButton);
exports.BuildToolsPanelButton = h;
var g = require("./80.js");
var C = require("./33.js");
var _ = require("./14.js");
var m = require("./238.js");
var f = require("./224.js");
o.classImplementsInterfaces(h, "ICollectableRendererList");