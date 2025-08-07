Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./18.js");
var s = function (e) {
  function UnitReviveListComponent(t, i) {
    var n = e.call(this, t, i) || this;
    n.category = a.ClientConstCastle.CATEGORY_HOSPITAL;
    n._reviveSlotLevelHandlerComponent = new r.HospitalReviveSlotLevelHandlerComponent();
    return n;
  }
  n.__extends(UnitReviveListComponent, e);
  UnitReviveListComponent.prototype.createBuildListItem = function () {
    return new l.UnitReviveListItem(new Library.CastleInterfaceElements.ReviveListItem_S());
  };
  UnitReviveListComponent.prototype.fillItems = function (t, i = 0) {
    e.prototype.fillItems.call(this, t, i);
  };
  UnitReviveListComponent.prototype.setItemTooltip = function (e) {
    e.disp.toolTipText = null;
    if (e.slotVO.isLocked) {
      e.disp.toolTipText = {
        t: "dialog_hospital_lockedSlot_tooltip",
        p: [this._reviveSlotLevelHandlerComponent.getHospitalLevelForSlotIndex(e.slotVO.pos)]
      };
    } else if (e.slotVO.isFree) {
      e.disp.toolTipText = "recruitSlot_available";
    } else {
      var t = o.Localize.text(e.slotVO.unitVO.type + "_name");
      if (e.slotVO.pos != 0) {
        e.disp.toolTipText = {
          t: "healSlot_occupied_queue",
          p: [t]
        };
      } else {
        e.disp.toolTipText = {
          t: "healSlot_occupied",
          p: [t]
        };
      }
    }
  };
  UnitReviveListComponent.prototype.onItemLockedClick = function (e) {};
  return UnitReviveListComponent;
}(require("./1567.js").UnitBuildListComponent);
exports.UnitReviveListComponent = s;
var r = require("./2947.js");
var l = require("./2948.js");