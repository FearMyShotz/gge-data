Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function IsoRenderComponentEnum(t, i) {
    var n = this;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, o.BasicEnum.instantiationKey) || this)._componentClass = i;
    return n;
  }
  n.__extends(IsoRenderComponentEnum, e);
  Object.defineProperty(IsoRenderComponentEnum.prototype, "componentClass", {
    get: function () {
      return this._componentClass;
    },
    enumerable: true,
    configurable: true
  });
  IsoRenderComponentEnum.__initialize_static_members = function () {
    IsoRenderComponentEnum.LAYERS = new IsoRenderComponentEnum("layers", r.IsoViewLayers);
    IsoRenderComponentEnum.SETTINGS = new IsoRenderComponentEnum("settings", c.IsoViewSettings);
    IsoRenderComponentEnum.STRATEGY = new IsoRenderComponentEnum("strategy", d.IsoViewStrategyManager);
    IsoRenderComponentEnum.MOUSE = new IsoRenderComponentEnum("mouse", l.IsoViewMouse);
    IsoRenderComponentEnum.OBJECTS = new IsoRenderComponentEnum("objects", u.IsoViewObjects);
    IsoRenderComponentEnum.CAMERA = new IsoRenderComponentEnum("camera", s.IsoViewCamera);
  };
  return IsoRenderComponentEnum;
}(require("./84.js").CastleEnum);
exports.IsoRenderComponentEnum = a;
var s = require("./1186.js");
var r = require("./2076.js");
var l = require("./2077.js");
var c = require("./2730.js");
var u = require("./2731.js");
var d = require("./2733.js");
a.__initialize_static_members();