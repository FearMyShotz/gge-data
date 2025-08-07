Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./27.js");
var s = require("./195.js");
var r = function (e) {
  function CollectableItemVipTimeVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemVipTimeVE, e);
  Object.defineProperty(CollectableItemVipTimeVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_VipTime;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ACollectableItemSimpleIconVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemVipTimeVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemVipTimeVE.prototype.tooltipCreate = function () {
    return {
      t: "dialog_StarterDailyLoginBonus_premiumTime_v2",
      p: [a.CastleTimeStringHelper.getFullTimeString(this.itemVipTimeVO.duration)]
    };
  };
  Object.defineProperty(CollectableItemVipTimeVE.prototype, "itemVipTimeVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemVipTimeVE;
}(s.ACollectableItemSimpleIconVE);
exports.CollectableItemVipTimeVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");