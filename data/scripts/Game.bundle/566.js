Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AInteractiveIsoObjectVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AInteractiveIsoObjectVO, e);
  Object.defineProperty(AInteractiveIsoObjectVO.prototype, "isClickAvailable", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInteractiveIsoObjectVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInteractiveIsoObjectVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInteractiveIsoObjectVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return AInteractiveIsoObjectVO;
}(require("./309.js").AIsoObjectVO);
exports.AInteractiveIsoObjectVO = o;