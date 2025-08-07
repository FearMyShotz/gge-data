var i;
var a = this && this.__extends || (i = Object.setPrototypeOf || {
  __proto__: []
} instanceof Array && function (e, t) {
  e.__proto__ = t;
} || function (e, t) {
  for (var n in t) {
    if (t.hasOwnProperty(n)) {
      e[n] = t[n];
    }
  }
}, function (e, t) {
  function __() {
    this.constructor = e;
  }
  i(e, t);
  e.prototype = t === null ? Object.create(t) : (__.prototype = t.prototype, new __());
});
Object.defineProperty(exports, "__esModule", {
  value: true
});
var s = createjs.MovieClip;
var r = createjs.DisplayObject;
var o = createjs.Event;
var l = function (e) {
  function BaseContentReplacer() {
    var t = e.call(this) || this;
    t._preSizeWidth = 0;
    t._preSizeHeight = 0;
    t.addEventListener(o.ADDED_TO_STAGE, t.bindFunction(t.onAddedToStage), false, 0, true);
    return t;
  }
  a(BaseContentReplacer, e);
  BaseContentReplacer.prototype.onAddedToStage = function (e) {
    this.removeEventListener(o.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage), false);
    this.dispatchEvent(new o("EVENT_MC_REPLACER", true, false));
  };
  Object.defineProperty(BaseContentReplacer.prototype, "width", {
    get: function () {
      return Object.getOwnPropertyDescriptor(s.prototype, "width").get.call(this);
    },
    set: function (e) {
      var t = e || 0;
      Object.getOwnPropertyDescriptor(r.prototype, "width").set.call(this, t);
      if (Object.getOwnPropertyDescriptor(r.prototype, "width").get.call(this) == 0 && Object.getOwnPropertyDescriptor(r.prototype, "height").get.call(this) == 0) {
        this._preSizeWidth = t;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaseContentReplacer.prototype, "height", {
    get: function () {
      return Object.getOwnPropertyDescriptor(s.prototype, "height").get.call(this);
    },
    set: function (e) {
      var t = e || 0;
      Object.getOwnPropertyDescriptor(r.prototype, "height").set.call(this, t);
      if (Object.getOwnPropertyDescriptor(r.prototype, "width").get.call(this) == 0 && Object.getOwnPropertyDescriptor(r.prototype, "height").get.call(this) == 0) {
        this._preSizeHeight = t;
      }
    },
    enumerable: true,
    configurable: true
  });
  BaseContentReplacer.prototype.getOriginWidth = function () {
    throw new Error("Override With original Width from the flash asset");
  };
  BaseContentReplacer.prototype.getOriginHeight = function () {
    throw new Error("Override With original Height from the flash asset");
  };
  Object.defineProperty(BaseContentReplacer.prototype, "preSizeHeight", {
    get: function () {
      return this._preSizeHeight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaseContentReplacer.prototype, "preSizeWidth", {
    get: function () {
      return this._preSizeWidth;
    },
    enumerable: true,
    configurable: true
  });
  BaseContentReplacer.prototype.usePreSizes = function () {
    if (this._preSizeWidth != 0 && this._preSizeHeight != 0) {
      this.width = this._preSizeWidth;
      this.height = this._preSizeHeight;
      this._preSizeHeight = 0;
      this._preSizeWidth = 0;
    }
  };
  return BaseContentReplacer;
}(s);
exports.BaseContentReplacer = l;