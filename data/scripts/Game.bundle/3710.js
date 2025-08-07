Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./26.js");
var s = require("./4.js");
var r = function (e) {
  function CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, new Library.CastleInterfaceElements.CastleStandardYesNo()) || this;
  }
  n.__extends(CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog, e);
  CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    s.CastleModel.specialEventData.addEventListener(a.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    s.CastleModel.specialEventData.removeEventListener(a.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog.prototype.onSpecialEventRemoved = function (e) {
    var t = s.CastleModel.specialEventData.activeSeasonVO;
    if (!t || t.eventId == e.specialEventVO.eventId) {
      this.hide();
    }
  };
  CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog.NAME = "CastleSendResOrTroopsToSeasonInfoInsufficientTime";
  return CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog;
}(require("./151.js").CastleStandardYesNoDialog);
exports.CastleSendResOrTroopsToSeasonInfoInsufficientTimeDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");