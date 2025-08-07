Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1012.js");
var s = createjs.Point;
var r = function (e) {
  function IsoFloorCursorVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoFloorCursorVE, e);
  IsoFloorCursorVE.prototype.createDisp = function () {
    this.dispComponent.addDisp(l.IsoHelper.view.createFloorDisp(new s(1, 1), 0, 0.2));
  };
  IsoFloorCursorVE.prototype.getScreenPos = function () {
    return this.isoRenderer.camera.getScreenPosByGridPos(this.isoRenderer.mouse.getMouseGridPos());
  };
  Object.defineProperty(IsoFloorCursorVE.prototype, "dispOffset", {
    get: function () {
      return new s();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AIsoFloorMarkVE.prototype, "dispOffset").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return IsoFloorCursorVE;
}(a.AIsoFloorMarkVE);
exports.IsoFloorCursorVE = r;
var l = require("./46.js");
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");