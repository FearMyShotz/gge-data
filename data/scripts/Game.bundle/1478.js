Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./772.js");
var s = function (e) {
  function FactionPalisadeDefenceVO() {
    var t = e.call(this) || this;
    t._name = "FactionPalisade";
    return t;
  }
  n.__extends(FactionPalisadeDefenceVO, e);
  Object.defineProperty(FactionPalisadeDefenceVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastlewallDefenceVO.prototype, "isInfoTooltipAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionPalisadeDefenceVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastlewallDefenceVO.prototype, "isHoverGlowAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionPalisadeDefenceVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastlewallDefenceVO.prototype, "isRingmenuAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FactionPalisadeDefenceVO;
}(a.CastlewallDefenceVO);
exports.FactionPalisadeDefenceVO = s;
o.classImplementsInterfaces(s, "IShopVO", "ICostVO", "IInventoryVO");