Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = function (e) {
  function CastleAdvancedTroopSupportDialogHelper(t) {
    var i = e.call(this) || this;
    i._fightDialog = t;
    i._troopSupportDialog = i._fightDialog.dialogDisp;
    i._displayType = r.CastleAdvancedTroopSelectionComponent.TYPE_STATION;
    return i;
  }
  n.__extends(CastleAdvancedTroopSupportDialogHelper, e);
  CastleAdvancedTroopSupportDialogHelper.prototype.handleTarget = function (e) {
    var t = this._fightDialog;
    switch (e) {
      case this._troopSupportDialog.mc_supportItemHolder.toolContainer:
      case this._troopSupportDialog.mc_supportItemHolder.mc_tools:
        this._advancedFightScreenConnector = new l.CastleAdvancedFightScreenConnectorHandler(t.supportDefenceVO.supportTools, [this._troopSupportDialog.toolsConnector], l.CastleAdvancedFightScreenConnectorHandler.TOOLFRONT, this._displayType);
        this.display();
        break;
      case this._troopSupportDialog.mc_supportItemHolder.unitContainer:
      case this._troopSupportDialog.mc_supportItemHolder.mc_units:
        this._advancedFightScreenConnector = new l.CastleAdvancedFightScreenConnectorHandler(t.supportDefenceVO.supportUnits, [this._troopSupportDialog.unitConnector, this._troopSupportDialog.unitSideConnectors], l.CastleAdvancedFightScreenConnectorHandler.UNITFRONT, this._displayType);
        this.display();
        break;
      default:
        this.handleDefault(e);
    }
  };
  CastleAdvancedTroopSupportDialogHelper.prototype.handleDialogSlotContainer = function (e) {
    var t = this._fightDialog;
    var i = o.castAs(e.itemContainer, "CastleFightItemContainer");
    var n = e.itemVO;
    if (t.supportDefenceVO.supportTools == i) {
      this._advancedFightScreenConnector = new l.CastleAdvancedFightScreenConnectorHandler(i, [this._troopSupportDialog.toolsConnector], l.CastleAdvancedFightScreenConnectorHandler.TOOLFRONT, this._displayType, n);
    } else if (t.supportDefenceVO.supportUnits == i) {
      this._advancedFightScreenConnector = new l.CastleAdvancedFightScreenConnectorHandler(i, [this._troopSupportDialog.unitConnector, this._troopSupportDialog.unitSideConnectors], l.CastleAdvancedFightScreenConnectorHandler.UNITFRONT, this._displayType, n);
    }
  };
  return CastleAdvancedTroopSupportDialogHelper;
}(require("./959.js").CastleBasicAdvancedFightScreenDialogHelper);
exports.CastleAdvancedTroopSupportDialogHelper = s;
var r = require("./348.js");
var l = require("./960.js");
a.classImplementsInterfaces(s, "IAdvancedFightscreenHandler");