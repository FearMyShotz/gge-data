Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./197.js");
var s = require("./59.js");
var r = require("./20.js");
var o = createjs.Event;
var l = require("./3.js");
var u = function (e) {
  function ExternalDisplayObjectClipSource() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.animData = [];
    t._isLoaded = false;
    t._clipLoadedAndConverted = new r.Signal();
    return t;
  }
  i.__extends(ExternalDisplayObjectClipSource, e);
  Object.defineProperty(ExternalDisplayObjectClipSource.prototype, "isLoaded", {
    get: function () {
      return this._isLoaded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ExternalDisplayObjectClipSource.prototype, "clipLoadedAndConverted", {
    get: function () {
      return this._clipLoadedAndConverted;
    },
    enumerable: true,
    configurable: true
  });
  ExternalDisplayObjectClipSource.prototype.initExternalClipSource = function (e, t, n = null, i = 0, a = false, r = 1) {
    this._sourcePath = t;
    this.sourceClassName = e;
    this._colorData = n;
    this.debugColor = i;
    this.hasSubLayer = a;
    this._isLoaded = false;
    var l = t.substring(t.lastIndexOf("/") + 1, t.length);
    var u = s.GoodgameBitmapEngine.bulkLoader.addAssetBundle(this._sourcePath, {
      id: l.replace(/--\d+/, ""),
      priority: r
    });
    if (u) {
      if (u.isLoaded) {
        this.onLoaded(null);
      } else {
        u.addEventListener(o.COMPLETE, this.bindFunction(this.onLoaded));
      }
    }
  };
  ExternalDisplayObjectClipSource.prototype.onLoaded = function (e = null) {
    if (e != null) {
      e.target.removeEventListener(o.COMPLETE, this.bindFunction(this.onLoaded));
    }
    this._isLoaded = true;
    this.sourceClass = l.getDefinitionByNameFromLibrary(this.sourceClassName);
    if (this.sourceClass) {
      this.convertClass(this.sourceClass, this._colorData, this.debugColor, this.hasSubLayer);
      this._clipLoadedAndConverted.dispatch(this);
    }
  };
  ExternalDisplayObjectClipSource.surpressWarnings = false;
  return ExternalDisplayObjectClipSource;
}(a.DisplayObjectClipSource);
exports.ExternalDisplayObjectClipSource = u;