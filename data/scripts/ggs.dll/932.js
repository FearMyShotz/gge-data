Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = createjs.Container;
var s = createjs.Event;
var r = createjs.GlowFilter;
var o = require("./20.js");
var l = function (e) {
  function BitmapClipContainer() {
    var t = e.call(this) || this;
    t.isMouseOver = false;
    t._isInteractive = false;
    t.clipSizeChangedSignal = new o.Signal();
    t._isDisposed = false;
    t.mouseEnabled = false;
    t.addEventListener(s.ADDED_TO_STAGE, t.bindFunction(t.addedToStage), false);
    return t;
  }
  i.__extends(BitmapClipContainer, e);
  BitmapClipContainer.prototype.addItem = function (e, t = -1) {
    this.itemDict ||= new Map();
    if (this._isInteractive) {
      e.addEventListener("mouseout", this.bindFunction(this.onMouseOut));
      e.addEventListener("mouseover", this.bindFunction(this.onMouseOver));
    }
    this.itemDict.set(e, e);
    if (t < 1) {
      this.addChild(e.asDisplayObject());
    } else {
      this.addChildAt(e.asDisplayObject(), t);
    }
    this.addClipSizeComponentToItem(e);
  };
  BitmapClipContainer.prototype.addedToStage = function (e) {
    this.removeEventListener(s.ADDED_TO_STAGE, this.bindFunction(this.addedToStage));
    this.clipSizeChangedSignal.dispatch(this);
  };
  BitmapClipContainer.prototype.onChildClipSizeChanged = function (e) {
    this.clipSizeChangedSignal.dispatch(this);
  };
  Object.defineProperty(BitmapClipContainer.prototype, "isInteractive", {
    set: function (e) {
      if (e != this._isInteractive) {
        if (e) {
          this.addMouseListener();
        } else {
          this.removeMouseListener();
        }
        this._isInteractive = e;
      }
    },
    enumerable: true,
    configurable: true
  });
  BitmapClipContainer.prototype.addMouseListener = function () {
    if (this.itemDict) {
      for (var e = 0, t = Array.from(this.itemDict.values()); e < t.length; e++) {
        var n = t[e];
        n.removeEventListener("mouseout", this.bindFunction(this.onMouseOut));
        n.removeEventListener("mouseover", this.bindFunction(this.onMouseOver));
      }
    }
  };
  BitmapClipContainer.prototype.removeMouseListener = function () {
    if (this.itemDict) {
      for (var e = 0, t = Array.from(this.itemDict.values()); e < t.length; e++) {
        var n = t[e];
        n.removeEventListener("mouseout", this.bindFunction(this.onMouseOut));
        n.removeEventListener("mouseover", this.bindFunction(this.onMouseOver));
      }
    }
    this.removeEventListener(s.ADDED_TO_STAGE, this.addedToStage);
  };
  BitmapClipContainer.prototype.removeItem = function (e) {
    if (e) {
      e.dispose();
      e.removeEventListener("mouseout", this.bindFunction(this.onMouseOut));
      e.removeEventListener("mouseover", this.bindFunction(this.onMouseOver));
      if (e.asDisplayObject().parent == this) {
        this.removeChild(e.asDisplayObject());
      }
      if (this.itemDict) {
        this.itemDict.delete(e);
      }
    }
  };
  BitmapClipContainer.prototype.removeAllItems = function () {
    if (this.itemDict) {
      for (var e = 0, t = Array.from(this.itemDict.values()); e < t.length; e++) {
        var n = t[e];
        this.removeItem(n);
      }
    }
  };
  BitmapClipContainer.prototype.isHit = function (e, t) {
    if (this.itemDict) {
      for (var n = 0, i = Array.from(this.itemDict.values()); n < i.length; n++) {
        if (i[n].isHit(e, t)) {
          return true;
        }
      }
    }
    return false;
  };
  BitmapClipContainer.prototype.dispose = function () {
    if (this._clipSizeComponent) {
      this._clipSizeComponent.destroy();
    }
    this.removeAllItems();
    if (this.clipSizeChangedSignal) {
      this.clipSizeChangedSignal.removeAll();
    }
    this.removeEventListener(s.ADDED_TO_STAGE, this.bindFunction(this.addedToStage));
    this.itemDict = null;
    this._isDisposed = true;
  };
  Object.defineProperty(BitmapClipContainer.prototype, "isDisposed", {
    get: function () {
      return this._isDisposed;
    },
    enumerable: true,
    configurable: true
  });
  BitmapClipContainer.prototype.onMouseOut = function (e) {
    e.stopImmediatePropagation();
  };
  BitmapClipContainer.prototype.onMouseOver = function (e) {
    e.stopImmediatePropagation();
  };
  BitmapClipContainer.prototype.addGlow = function () {
    if (this.filters.length == 0) {
      this.filters = [new r(255, 0.5, 1, 1, 1, 1, false, false)];
    }
  };
  BitmapClipContainer.prototype.removeGlow = function () {
    if (this.filters.length > 0) {
      this.filters = [];
    }
  };
  BitmapClipContainer.prototype.asDisplayObject = function () {
    return this;
  };
  BitmapClipContainer.prototype.addClipSizeComponentToItem = function (e) {
    if (this._clipSizeComponent) {
      e.clipSizeComponent = this._clipSizeComponent;
      e.clipSizeComponent.clipSizeChanged.add(this.bindFunction(this.onChildClipSizeChanged));
    }
  };
  Object.defineProperty(BitmapClipContainer.prototype, "clipSizeComponent", {
    get: function () {
      return this._clipSizeComponent;
    },
    set: function (e) {
      this._clipSizeComponent = e;
      if (this._clipSizeComponent && this.itemDict) {
        for (var t = 0, n = Array.from(this.itemDict.values()); t < n.length; t++) {
          var i = n[t];
          this.addClipSizeComponentToItem(i);
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BitmapClipContainer.prototype, "mainClipClassName", {
    get: function () {
      return this._mainClipClassName;
    },
    set: function (e) {
      this._mainClipClassName = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BitmapClipContainer.prototype, "minSize", {
    get: function () {
      return this._minSize;
    },
    set: function (e) {
      this._minSize = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BitmapClipContainer.prototype, "maxSize", {
    get: function () {
      return this._maxSize;
    },
    set: function (e) {
      this._maxSize = e;
    },
    enumerable: true,
    configurable: true
  });
  BitmapClipContainer.prototype.once = function (e, t, n, i, a) {};
  return BitmapClipContainer;
}(a);
exports.BitmapClipContainer = l;