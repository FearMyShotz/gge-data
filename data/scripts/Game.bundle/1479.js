Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./770.js");
var s = function (e) {
  function PalisadeDefenceVO() {
    var t = e.call(this) || this;
    t._name = "Palisade";
    return t;
  }
  n.__extends(PalisadeDefenceVO, e);
  Object.defineProperty(PalisadeDefenceVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastlewallDefenceVO.prototype, "isInfoTooltipAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PalisadeDefenceVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastlewallDefenceVO.prototype, "isHoverGlowAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PalisadeDefenceVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastlewallDefenceVO.prototype, "isRingmenuAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return PalisadeDefenceVO;
}(a.CastlewallDefenceVO);
exports.PalisadeDefenceVO = s;
o.classImplementsInterfaces(s, "IShopVO", "ICostVO", "IInventoryVO");