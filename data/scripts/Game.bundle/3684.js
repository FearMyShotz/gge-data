Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./26.js");
var s = require("./4.js");
var r = function (e) {
  function CastleSendTroopsToSeasonAddUnitsDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleSendTroopsToSeasonAddUnitsDialog.NAME) || this;
  }
  n.__extends(CastleSendTroopsToSeasonAddUnitsDialog, e);
  CastleSendTroopsToSeasonAddUnitsDialog.prototype.addEventListenerOnShow = function () {
    s.CastleModel.specialEventData.addEventListener(a.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  CastleSendTroopsToSeasonAddUnitsDialog.prototype.removeEventListenerOnHide = function () {
    s.CastleModel.specialEventData.removeEventListener(a.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  CastleSendTroopsToSeasonAddUnitsDialog.prototype.onSpecialEventRemoved = function (e) {
    this.hide();
  };
  CastleSendTroopsToSeasonAddUnitsDialog.__initialize_static_members = function () {
    CastleSendTroopsToSeasonAddUnitsDialog.NAME = "CastleAttackAddUnitsEx";
  };
  return CastleSendTroopsToSeasonAddUnitsDialog;
}(require("./1073.js").CastleSendTroopsAddUnitsDialog);
exports.CastleSendTroopsToSeasonAddUnitsDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();