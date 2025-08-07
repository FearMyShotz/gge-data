Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./92.js");
var s = require("./488.js");
var r = require("./2735.js");
var l = function (e) {
  function IsoViewStrategyManager() {
    var t = this;
    t._prevStrategy = new r.IsoViewStrategy();
    t._currentStrategy = new r.IsoViewStrategy();
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).setToDefault();
    return t;
  }
  n.__extends(IsoViewStrategyManager, e);
  IsoViewStrategyManager.prototype.reset = function () {
    e.prototype.reset.call(this);
    this.setToDefault();
    this.triggerCallbacks();
  };
  IsoViewStrategyManager.prototype.destroy = function () {
    this.setToDefault();
    e.prototype.destroy.call(this);
  };
  IsoViewStrategyManager.prototype.setup = function () {
    e.prototype.setup.call(this);
    this.setToDefault();
  };
  IsoViewStrategyManager.prototype.switchTo = function (e) {
    this.updatePrevStrategy();
    this.switchAll(false);
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this.currentStrategy.modes.set(n, true);
        }
      }
    }
    this.triggerCallbacks();
  };
  IsoViewStrategyManager.prototype.switchBy = function (e, t) {
    if (this.currentStrategy.isActive(e) != t && e) {
      this.updatePrevStrategy();
      this.currentStrategy.modes.set(e, t);
      this.triggerCallbacks();
    }
  };
  IsoViewStrategyManager.prototype.toggle = function (e) {
    this.switchBy(e, !this.currentStrategy.isActive(e));
  };
  IsoViewStrategyManager.prototype.triggerCallbacks = function () {
    this.isoRenderer.mouse.onRenderStrategyChanged();
    c.CastleComponent.controller.dispatchEvent(new a.IsoEvent(a.IsoEvent.ON_RENDER_STRATEGY_CHANGED));
  };
  IsoViewStrategyManager.prototype.switchToNormalMode = function () {
    if (!this.currentStrategy.isInNormalMode) {
      this.updatePrevStrategy();
      this.switchAll(false);
      this.triggerCallbacks();
    }
  };
  IsoViewStrategyManager.prototype.switchAll = function (e) {
    for (var t = 0, i = Array.from(this.currentStrategy.modes.keys()); t < i.length; t++) {
      var n = i[t];
      this.currentStrategy.modes.set(n, e);
    }
  };
  IsoViewStrategyManager.prototype.updatePrevStrategy = function () {
    for (var e = 0, t = Array.from(this.currentStrategy.modes.keys()); e < t.length; e++) {
      var i = t[e];
      this.prevStrategy.modes.set(i, this.currentStrategy.modes.get(i));
    }
  };
  IsoViewStrategyManager.prototype.setToDefault = function () {
    this.switchAll(false);
    this.updatePrevStrategy();
  };
  IsoViewStrategyManager.prototype.hasModeChanged = function (e) {
    return this.prevStrategy.isActive(e) != this.currentStrategy.isActive(e);
  };
  Object.defineProperty(IsoViewStrategyManager.prototype, "prevStrategy", {
    get: function () {
      return this._prevStrategy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewStrategyManager.prototype, "currentStrategy", {
    get: function () {
      return this._currentStrategy;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewStrategyManager;
}(s.AIsoViewComponent);
exports.IsoViewStrategyManager = l;
var c = require("./14.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");