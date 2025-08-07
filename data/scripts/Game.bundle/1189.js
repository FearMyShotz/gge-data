Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./14.js");
var s = require("./290.js");
var r = require("./2061.js");
var l = require("./293.js");
var c = function (e) {
  function AIsoStatusIcon() {
    var t = this;
    t._dispComponent = new s.DispCreatorComponent();
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AIsoStatusIcon, e);
  AIsoStatusIcon.prototype.init = function (e, t) {
    this._ve = e;
    this._iconType = t;
    this._dispComponent.init(e.layers.getLayer(l.IsoObjectLayerEnum.STATUS_ICONS));
    this._dispComponent.cacheBehaviour = new r.IsoMovementDispCreatorCacheBehaviour();
  };
  AIsoStatusIcon.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.destroyDisp();
    this.dispComponent.destroy();
  };
  AIsoStatusIcon.prototype.updateDisp = function () {
    this.destroyDisp();
    this.dispComponent.onLoadedSignal.add(this.bindFunction(this.onAllDispClipsLoaded));
    this.dispComponent.switchCreationState(true);
    this.createDisp();
    this.dispComponent.switchCreationState(false);
  };
  AIsoStatusIcon.prototype.createDisp = function () {};
  AIsoStatusIcon.prototype.destroyDisp = function () {
    this.dispComponent.reset();
  };
  AIsoStatusIcon.prototype.update = function (e) {};
  AIsoStatusIcon.prototype.getDispHeight = function () {
    return this.dispComponent.dispContainer.getBounds(null).height;
  };
  AIsoStatusIcon.prototype.onAllDispClipsLoaded = function () {
    this.dispComponent.onLoadedSignal.remove(this.bindFunction(this.onAllDispClipsLoaded));
  };
  Object.defineProperty(AIsoStatusIcon.prototype, "ve", {
    get: function () {
      return this._ve;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoStatusIcon.prototype, "dispComponent", {
    get: function () {
      return this._dispComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoStatusIcon.prototype, "iconType", {
    get: function () {
      return this._iconType;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoStatusIcon;
}(a.CastleComponent);
exports.AIsoStatusIcon = c;
o.classImplementsInterfaces(c, "ICollectableRendererList");