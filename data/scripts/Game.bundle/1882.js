Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function APopoverVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(APopoverVE, e);
  APopoverVE.prototype.fillContent = function (e) {};
  APopoverVE.prototype.getPopoverConfig = function () {
    return null;
  };
  Object.defineProperty(APopoverVE.prototype, "popoverVO", {
    get: function () {
      return this._popoverVO;
    },
    set: function (e) {
      this._popoverVO = e;
    },
    enumerable: true,
    configurable: true
  });
  return APopoverVE;
}(require("./14.js").CastleComponent);
exports.APopoverVE = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");