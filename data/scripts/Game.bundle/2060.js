Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function IsoStatusIconImage() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoStatusIconImage, e);
  IsoStatusIconImage.prototype.createDisp = function () {
    this.dispComponent.addDisp(new this.iconType.dispClass());
  };
  return IsoStatusIconImage;
}(require("./1189.js").AIsoStatusIcon);
exports.IsoStatusIconImage = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");