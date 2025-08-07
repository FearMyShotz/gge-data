Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./229.js");
var s = require("./2020.js");
var r = require("./242.js");
var l = createjs.Point;
var c = function (e) {
  function CollectableRendererIconTransform() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CollectableRendererIconTransform, e);
  Object.defineProperty(CollectableRendererIconTransform, "DEFAULT_TRANSFORMS", {
    get: function () {
      if (a.isNullOrUndefined(CollectableRendererIconTransform._DEFAULT_TRANSFORMS)) {
        CollectableRendererIconTransform._DEFAULT_TRANSFORMS = CollectableRendererIconTransform._getDefaultTransformDic();
      }
      return CollectableRendererIconTransform._DEFAULT_TRANSFORMS;
    },
    enumerable: true,
    configurable: true
  });
  CollectableRendererIconTransform._getDefaultTransformDic = function () {
    var e = new Map();
    e.set(u.CollectableEnum.EQUIPMENT_UNIQUE, new s.CollectableTransformVO(new l(0, 10)));
    e.set(u.CollectableEnum.EQUIPMENT_RARENESS, new s.CollectableTransformVO(new l(0, 10)));
    e.set(u.CollectableEnum.HERO_RANDOM, new s.CollectableTransformVO(new l(0, 10)));
    e.set(u.CollectableEnum.BOOSTER, new s.CollectableTransformVO(new l(0, 11)));
    e.set(u.CollectableEnum.BUILDING, new s.CollectableTransformVO(new l(0, 11)));
    e.set(u.CollectableEnum.EXTINGUISH_FIRE, new s.CollectableTransformVO(new l(0, 10)));
    e.set(u.CollectableEnum.GEM, new s.CollectableTransformVO(new l(0, 10)));
    e.set(u.CollectableEnum.GEM_RANDOM, new s.CollectableTransformVO(new l(0, 10)));
    e.set(u.CollectableEnum.ALLIANCE_GIFT, new s.CollectableTransformVO(new l(0, 10)));
    e.set(u.CollectableEnum.PERMANENT_TOOL_SLOT, new s.CollectableTransformVO(new l(0, 10)));
    e.set(u.CollectableEnum.PERMANENT_UNIT_SLOT, new s.CollectableTransformVO(new l(0, 10)));
    return e;
  };
  CollectableRendererIconTransform.prototype.reset = function () {};
  Object.defineProperty(CollectableRendererIconTransform.prototype, "transform", {
    get: function () {
      if (!this._transform) {
        var e = CollectableRendererIconTransform.DEFAULT_TRANSFORMS.get(this.itemVO ? this.itemVO.itemType : u.CollectableEnum.UNKNOWN);
        this._transform = e ? e.clone() : new s.CollectableTransformVO(new l(0, 0));
      }
      return this._transform;
    },
    enumerable: true,
    configurable: true
  });
  CollectableRendererIconTransform.prototype.onLoadedIcon = function () {
    if (this.renderer.itemVE) {
      var e = this.renderer.itemVE.iconContainer;
      if (e) {
        e.x += this.transform.offset.x;
        e.y += this.transform.offset.y;
      }
    }
  };
  return CollectableRendererIconTransform;
}(r.ACollectableRenderComponent);
exports.CollectableRendererIconTransform = c;
var u = require("./12.js");
o.classImplementsInterfaces(c, "ICollectableRendererList");