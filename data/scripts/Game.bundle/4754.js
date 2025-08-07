Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleAdvancedSupportDefenceDialogHelper(t) {
    var i = e.call(this) || this;
    i._fightDialog = t;
    i._supportDefenceDialog = i._fightDialog.dialogDisp;
    i._displayType = s.CastleAdvancedTroopSelectionComponent.TYPE_SUPPORT;
    return i;
  }
  n.__extends(CastleAdvancedSupportDefenceDialogHelper, e);
  CastleAdvancedSupportDefenceDialogHelper.prototype.handleTarget = function (e) {
    var t = this._fightDialog;
    switch (e) {
      case this._supportDefenceDialog.mc_supportItemHolder.unitContainer:
      case this._supportDefenceDialog.mc_supportItemHolder.mc_supportItems:
        this._advancedFightScreenConnector = new r.CastleAdvancedFightScreenConnectorHandler(t.supportDefenceVO.supportUnits, [this._supportDefenceDialog.unitConnector], r.CastleAdvancedFightScreenConnectorHandler.UNITFRONT, this._displayType);
        this.display();
        break;
      default:
        this.handleDefault(e);
    }
  };
  CastleAdvancedSupportDefenceDialogHelper.prototype.handleDialogSlotContainer = function (e) {
    var t = e.itemVO;
    this._advancedFightScreenConnector = new r.CastleAdvancedFightScreenConnectorHandler(e.itemContainer, [this._supportDefenceDialog.unitConnector], r.CastleAdvancedFightScreenConnectorHandler.UNITFRONT, this._displayType, t);
  };
  return CastleAdvancedSupportDefenceDialogHelper;
}(require("./959.js").CastleBasicAdvancedFightScreenDialogHelper);
exports.CastleAdvancedSupportDefenceDialogHelper = a;
var s = require("./348.js");
var r = require("./960.js");
o.classImplementsInterfaces(a, "IAdvancedFightscreenHandler");