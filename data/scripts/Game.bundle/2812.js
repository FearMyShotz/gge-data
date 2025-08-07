Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./113.js");
var l = require("./1011.js");
var c = createjs.Container;
var u = createjs.Point;
var d = function (e) {
  function IsoDebugPosVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoDebugPosVE, e);
  IsoDebugPosVE.prototype.updatePosition = function () {
    e.prototype.updatePosition.call(this);
    this.updateText();
  };
  IsoDebugPosVE.prototype.updateText = function () {
    if (this._text) {
      var e = this.isoRenderer.mouse.getMouseGridPos();
      var t = this.isoRenderer.mouse.getMouseScreenPos();
      this._text.text = "g:" + e.x + "|" + e.y + " # s:" + t.x + "|" + t.y;
    }
  };
  IsoDebugPosVE.prototype.createDisp = function () {
    var e = new c();
    var t = p.IsoHelper.view.createFloorDisp(new u(1, 1), 16711680, 0.5);
    t.mouseEnabled = false;
    e.addChild(t);
    this._text = new o.TextField();
    this._text.textColor = 16711935;
    this._text.x = 35;
    this._text.y = -40;
    this._text.scaleX = this._text.scaleY = 4;
    this._text.autoSize = a.TextFieldAutoSize.LEFT;
    e.addChild(this._text);
    this.dispComponent.addDisp(e);
  };
  IsoDebugPosVE.prototype.getScreenPos = function () {
    return this.isoRenderer.camera.getScreenPosByGridPos(this.isoRenderer.mouse.getMouseGridPos());
  };
  Object.defineProperty(IsoDebugPosVE.prototype, "dispOffset", {
    get: function () {
      return new u();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AIsoFloorMarkVE.prototype, "dispOffset").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  IsoDebugPosVE.prototype.getVELayerType = function () {
    return r.IsoLayerEnum.DEBUG;
  };
  return IsoDebugPosVE;
}(l.AIsoFloorMarkVE);
exports.IsoDebugPosVE = d;
var p = require("./46.js");
s.classImplementsInterfaces(d, "ICollectableRendererList", "IIngameUICapable");