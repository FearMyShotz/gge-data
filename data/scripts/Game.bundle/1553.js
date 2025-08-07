Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./87.js");
var r = require("./1022.js");
var l = require("./34.js");
var c = function (e) {
  function PremiumMoatVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(PremiumMoatVO, e);
  Object.defineProperty(PremiumMoatVO.prototype, "isMoatAvailableByBuildOrder", {
    get: function () {
      var e = l.Iso.data.objects.defences.moat;
      if (e && a.instanceOfClass(e, "PremiumMoatVO")) {
        return this.level == e.level + 1 && e.buildingState != s.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS;
      } else {
        return this.level == 1;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BasicMoatVO.prototype, "isMoatAvailableByBuildOrder").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return PremiumMoatVO;
}(r.BasicMoatVO);
exports.PremiumMoatVO = c;
o.classImplementsInterfaces(c, "IShopVO", "ICostVO", "IInventoryVO");