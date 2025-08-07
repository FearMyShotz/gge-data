Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./26.js");
var r = require("./4.js");
var l = function (e) {
  function CastleSendTroopsToFactionAddUnitsDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleSendTroopsToFactionAddUnitsDialog.NAME) || this;
  }
  n.__extends(CastleSendTroopsToFactionAddUnitsDialog, e);
  CastleSendTroopsToFactionAddUnitsDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    r.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  CastleSendTroopsToFactionAddUnitsDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    r.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  CastleSendTroopsToFactionAddUnitsDialog.prototype.onSpecialEventRemoved = function (e) {
    if (e.specialEventVO.eventId == a.EventConst.EVENTTYPE_FACTION) {
      this.hide();
    }
  };
  CastleSendTroopsToFactionAddUnitsDialog.__initialize_static_members = function () {
    CastleSendTroopsToFactionAddUnitsDialog.NAME = "CastleAttackAddUnitsEx";
  };
  return CastleSendTroopsToFactionAddUnitsDialog;
}(require("./1072.js").CastleSendTroopsAddUnitsDialog);
exports.CastleSendTroopsToFactionAddUnitsDialog = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();