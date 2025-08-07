Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./41.js");
var l = createjs.Event;
var c = function (e) {
  function CastleDisplayObjectClipContainer() {
    var t = this;
    t._allClipsLoaded = true;
    t._centerClip = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleDisplayObjectClipContainer, e);
  CastleDisplayObjectClipContainer.prototype.addItem = function (t, i) {
    e.prototype.addItem.call(this, t, i);
    if (t instanceof a.GoodgameDisplayObjectClipExternal) {
      var n = t;
      if (!n.isLoaded) {
        n.clipLoaded.addOnce(this.bindFunction(this.onClipLoaded));
        this._allClipsLoaded = false;
        this.visible = false;
      }
    }
  };
  CastleDisplayObjectClipContainer.prototype.areAllClipsLoaded = function () {
    for (var e = 0, t = this.children; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined) {
        if (i instanceof a.GoodgameDisplayObjectClipExternal) {
          if (!i.isLoaded) {
            return false;
          }
        }
      }
    }
    return true;
  };
  Object.defineProperty(CastleDisplayObjectClipContainer.prototype, "allClipsLoaded", {
    get: function () {
      return this._allClipsLoaded;
    },
    enumerable: true,
    configurable: true
  });
  CastleDisplayObjectClipContainer.prototype.onClipLoaded = function (e) {
    this._allClipsLoaded = this.areAllClipsLoaded();
    if (this._allClipsLoaded) {
      this.visible = true;
      this.applyClipSize();
      this.dispatchEvent(new l(l.COMPLETE));
    }
  };
  CastleDisplayObjectClipContainer.prototype.applyClipSize = function () {
    if (this._allClipsLoaded) {
      if (this.clipSizeComponent) {
        this.clipSizeComponent.setImageSize(this, this.getBounds());
        if (this.centerClip) {
          this.x = this.clipSizeComponent.offsetX;
          this.y = this.clipSizeComponent.offsetY;
        }
      } else if (this.centerClip) {
        var e = this.getBounds(null);
        this.x = -(e.width / 2 + e.left);
        this.y = -(e.height / 2 + e.top);
      }
    }
  };
  Object.defineProperty(CastleDisplayObjectClipContainer.prototype, "clipSizeComponent", {
    get: function () {
      return Object.getOwnPropertyDescriptor(o.DisplayObjectClipContainer.prototype, "clipSizeComponent").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.DisplayObjectClipContainer.prototype, "clipSizeComponent").set.call(this, e);
      this.applyClipSize();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDisplayObjectClipContainer.prototype, "centerClip", {
    get: function () {
      return this._centerClip;
    },
    set: function (e) {
      this._centerClip = e;
      this.applyClipSize();
    },
    enumerable: true,
    configurable: true
  });
  CastleDisplayObjectClipContainer.prototype.dispose = function () {
    e.prototype.dispose.call(this);
    r.CastleMovieClipHelper.uncacheSafe(this);
  };
  return CastleDisplayObjectClipContainer;
}(o.DisplayObjectClipContainer);
exports.CastleDisplayObjectClipContainer = c;
s.classImplementsInterfaces(c, "Container", "IClipContainer");