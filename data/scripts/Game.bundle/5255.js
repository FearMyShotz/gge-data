Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./4.js");
var r = require("./1159.js");
var l = function (e) {
  function ConstructionSlotVO() {
    var t = this;
    t.objectId = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._timeTillLocked = -1;
    return t;
  }
  n.__extends(ConstructionSlotVO, e);
  Object.defineProperty(ConstructionSlotVO.prototype, "isFree", {
    get: function () {
      return this.objectId == a.ConstructionConst.SLOTSTATEUNLOCKED;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BasicSlotVO.prototype, "isFree").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionSlotVO.prototype, "isLocked", {
    get: function () {
      return this.objectId == a.ConstructionConst.SLOTSTATELOCKED;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BasicSlotVO.prototype, "isLocked").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ConstructionSlotVO.prototype.isWaitingSlot = function () {
    return this.pos >= s.CastleModel.areaData.activeConstructionList.numConstructionSlots;
  };
  return ConstructionSlotVO;
}(r.BasicSlotVO);
exports.ConstructionSlotVO = l;
o.classImplementsInterfaces(l, "ISlotVO", "IEventDispatcher");