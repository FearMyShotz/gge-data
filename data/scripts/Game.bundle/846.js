Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./18.js");
var l = require("./4.js");
var c = require("./236.js");
var u = require("./263.js");
var d = require("./89.js");
var p = function (e) {
  function RecruitPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RecruitPanelButton, e);
  RecruitPanelButton.prototype.updateOnVisible = function () {
    this.iconMc.gotoAndStop(l.CastleModel.kingdomData.activeKingdomID == a.FactionConst.KINGDOM_ID ? 2 : 1);
  };
  Object.defineProperty(RecruitPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Recruit;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RecruitPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      if (l.CastleModel.kingdomData.activeKingdomID == a.FactionConst.KINGDOM_ID) {
        return "hire";
      } else {
        return "panel_action_recruit";
      }
    } else {
      return "alert_never_available";
    }
  };
  RecruitPanelButton.prototype.isButtonEnabled = function () {
    return !!g.Iso.data && C.CastleComponent.layoutManager.isInMyCastle && !C.CastleComponent.layoutManager.isInMyOccupiedCastle && (g.Iso.data.objects.provider.hasFunctionalBuildingByType(h.IsoObjectEnum.BARRACKS) || g.Iso.data.objects.provider.hasFunctionalBuildingByType(h.IsoObjectEnum.FACTION_BARRACKS));
  };
  RecruitPanelButton.prototype.isButtonVisible = function () {
    return C.CastleComponent.layoutManager.currentState == f.CastleLayoutManager.STATE_ISO;
  };
  RecruitPanelButton.prototype.onButtonClicked = function () {
    if (l.CastleModel.areaData.activeArea.isFactionCamp ? l.CastleModel.militaryData.isBuildingCategoryAllowed(r.ClientConstCastle.UNIT_BUILDINGTYPE_FACTION_BARRACKS) : l.CastleModel.militaryData.isBuildingCategoryAllowed(r.ClientConstCastle.UNIT_BUILDINGTYPE_BARRACKS)) {
      C.CastleComponent.dialogHandler.registerDefaultDialogs(m.CastleRecruitDialog, new u.CastleRecruitDialogProperties(l.CastleModel.areaData.activeArea.isFactionCamp ? r.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES : r.ClientConstCastle.UNIT_CATEGORY_SOLDIERS));
    } else {
      C.CastleComponent.dialogHandler.registerDefaultDialogs(_.CastleCharacterYesNoOKDialog, new c.CastleCharacterYesNoOKDialogProperties(s.Localize.text("generic_alert_watchout"), s.Localize.text("alert_noBaracks_copy"), 4, null, null, false));
    }
  };
  return RecruitPanelButton;
}(d.APanelButton);
exports.RecruitPanelButton = p;
var h = require("./80.js");
var g = require("./34.js");
var C = require("./14.js");
var _ = require("./238.js");
var m = require("./225.js");
var f = require("./17.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");