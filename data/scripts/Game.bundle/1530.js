Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./1011.js");
var r = createjs.Point;
var l = function (e) {
  function IsoTutorialMarkerVE() {
    var t = this;
    t._gridPos = new r();
    t._dimension = new r(5, 5);
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(IsoTutorialMarkerVE, e);
  IsoTutorialMarkerVE.prototype.createDisp = function () {
    try {
      this.dispComponent.addDisp(new (a.getDefinitionByNameFromLibrary("Basic_Tutorialmarker_" + this.dimension.x + "x" + this.dimension.y))());
    } catch (e) {}
  };
  IsoTutorialMarkerVE.prototype.show = function (e, t) {
    this._gridPos = e;
    this._dimension = t;
    this.updateDisp();
    this.elementContainer.visible = true;
  };
  IsoTutorialMarkerVE.prototype.hide = function () {
    this.elementContainer.visible = false;
  };
  IsoTutorialMarkerVE.prototype.getScreenPos = function () {
    return this.isoRenderer.camera.getScreenPosByGridPos(new r(this.gridPos.x, this.gridPos.y));
  };
  Object.defineProperty(IsoTutorialMarkerVE.prototype, "gridPos", {
    get: function () {
      return this._gridPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoTutorialMarkerVE.prototype, "dimension", {
    get: function () {
      return this._dimension;
    },
    enumerable: true,
    configurable: true
  });
  return IsoTutorialMarkerVE;
}(s.AIsoFloorMarkVE);
exports.IsoTutorialMarkerVE = l;
o.classImplementsInterfaces(l, "ICollectableRendererList", "IIngameUICapable");