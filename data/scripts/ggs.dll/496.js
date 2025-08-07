Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function DisplayObjectClipContainer() {
    var t = e.call(this) || this;
    t._isDisposed = false;
    t.itemDict = new Map();
    t.mouseChildren = false;
    return t;
  }
  i.__extends(DisplayObjectClipContainer, e);
  DisplayObjectClipContainer.prototype.addItem = function (e, t = -1) {
    this.itemDict.set(e, e);
    if (t < 0) {
      this.addChild(e.asDisplayObject());
    } else {
      this.addChildAt(e.asDisplayObject(), t);
    }
  };
  DisplayObjectClipContainer.prototype.isHit = function (e, t) {
    return false;
  };
  DisplayObjectClipContainer.prototype.removeItem = function (e) {
    if (this.itemDict) {
      if (e) {
        e.dispose();
        if (e.asDisplayObject().parent == this) {
          this.removeChild(e.asDisplayObject());
        }
      }
      this.itemDict.delete(e);
    }
  };
  DisplayObjectClipContainer.prototype.removeAllItems = function () {
    for (var e = 0, t = Array.from(this.itemDict.values()); e < t.length; e++) {
      var n = t[e];
      this.removeItem(n);
    }
  };
  DisplayObjectClipContainer.prototype.dispose = function () {
    if (this._clipSizeComponent) {
      this._clipSizeComponent.destroy();
    }
    this.removeAllItems();
    this.itemDict = null;
    this._isDisposed = true;
  };
  Object.defineProperty(DisplayObjectClipContainer.prototype, "isDisposed", {
    get: function () {
      return this._isDisposed;
    },
    enumerable: true,
    configurable: true
  });
  DisplayObjectClipContainer.prototype.asDisplayObject = function () {
    return this;
  };
  Object.defineProperty(DisplayObjectClipContainer.prototype, "clipSizeComponent", {
    get: function () {
      return this._clipSizeComponent;
    },
    set: function (e) {
      this._clipSizeComponent = e;
    },
    enumerable: true,
    configurable: true
  });
  DisplayObjectClipContainer.prototype.once = function (e, t, n, i, a) {};
  return DisplayObjectClipContainer;
}(createjs.Container);
exports.DisplayObjectClipContainer = a;