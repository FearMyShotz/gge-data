Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function HospitalReviveSlotLevelHandlerComponent() {
    this.init();
  }
  HospitalReviveSlotLevelHandlerComponent.prototype.init = function () {
    this._slots = [];
    for (var e = 0, t = Array.from(r.CastleModel.wodData.voSubList(o.CastleWodData.TYPE_BUILDING).values()); e < t.length; e++) {
      var i = t[e];
      if (i !== undefined && a.instanceOfClass(i, "HospitalBuildingVO")) {
        var n = s.int(this.getHospitalIndex(i));
        if (n >= 0) {
          if (this._slots[n].level > i.level) {
            this._slots[n] = i;
          }
        } else {
          this._slots.push(i);
        }
      }
    }
    this._slots = this._slots.sort(HospitalReviveSlotLevelHandlerComponent.sortBySlotPos);
  };
  HospitalReviveSlotLevelHandlerComponent.prototype.getHospitalIndex = function (e) {
    for (var t = 0; t < this._slots.length; t++) {
      if (this._slots[t].hospitalSlots == e.hospitalSlots) {
        return t;
      }
    }
    return -1;
  };
  HospitalReviveSlotLevelHandlerComponent.sortBySlotPos = function (e, t) {
    if (e.hospitalSlots > t.hospitalSlots) {
      return 1;
    } else if (e.hospitalSlots < t.hospitalSlots) {
      return -1;
    } else {
      return 0;
    }
  };
  HospitalReviveSlotLevelHandlerComponent.prototype.getHospitalLevelForSlotIndex = function (e) {
    if (e >= this._slots.length || e < 0) {
      throw new Error("slotId out of bounds");
    }
    return s.int(this._slots[e].level);
  };
  return HospitalReviveSlotLevelHandlerComponent;
}();
exports.HospitalReviveSlotLevelHandlerComponent = n;
var o = require("./56.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./4.js");