Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function AnimatedFlashUIComponent(t) {
    return e.call(this, t) || this;
  }
  i.__extends(AnimatedFlashUIComponent, e);
  AnimatedFlashUIComponent.prototype.onEnterFrameUpdate = function () {};
  return AnimatedFlashUIComponent;
}(require("./100.js").FlashUIComponent);
exports.AnimatedFlashUIComponent = a;