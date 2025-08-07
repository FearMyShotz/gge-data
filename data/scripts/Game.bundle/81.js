Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./57.js");
var r = require("./290.js");
var l = require("./40.js");
var c = createjs.MovieClip;
var u = createjs.Point;
var d = function (e) {
  function AInfiniteScrollListItem() {
    var t = e.call(this, new c()) || this;
    t._onDispLoadedSignal = new s.Signal(AInfiniteScrollListItem);
    t._position = new u(0, 0);
    return t;
  }
  n.__extends(AInfiniteScrollListItem, e);
  AInfiniteScrollListItem.prototype.init = function (e) {
    this._parentComponent = e;
    this._dispCreator = new r.DispCreatorComponent();
    this._dispCreator.cacheDisp = false;
    this._dispCreator.init(this.disp);
    this._dispCreator.dispContainer.mouseChildren = true;
    this._dispCreator.onLoadedSignal.add(this.bindFunction(this.onDispLoaded));
    this._dispCreator.switchCreationState(true);
    this._dispCreator.addClip(new o.GoodgameDisplayObjectClipExternal(e.options.itemAssetClipName, p.IsoHelper.view.getAssetFileURL(e.options.itemAssetFileName), null, 0, false));
    this._dispCreator.switchCreationState(false);
  };
  AInfiniteScrollListItem.prototype.initLoaded = function () {};
  AInfiniteScrollListItem.prototype.updateWithNewData = function (e) {
    this._data = e;
    this.update();
  };
  AInfiniteScrollListItem.prototype.update = function () {
    var e = this.data != null;
    this.disp.visible = e;
    if (e) {
      this.fill();
    }
  };
  AInfiniteScrollListItem.prototype.fill = function () {};
  AInfiniteScrollListItem.prototype.isDispLoaded = function () {
    return this._dispCreator.isLoaded;
  };
  AInfiniteScrollListItem.prototype.getItemMc = function () {
    if (this._dispCreator.clipList.length > 0) {
      return this._dispCreator.getClipMc(0);
    } else {
      return null;
    }
  };
  AInfiniteScrollListItem.prototype.onDispLoaded = function () {
    this.initLoaded();
    this.update();
    this.onDispLoadedSignal.dispatch(this);
  };
  Object.defineProperty(AInfiniteScrollListItem.prototype, "parentComponent", {
    get: function () {
      return this._parentComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInfiniteScrollListItem.prototype, "data", {
    get: function () {
      return this._data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInfiniteScrollListItem.prototype, "onDispLoadedSignal", {
    get: function () {
      return this._onDispLoadedSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInfiniteScrollListItem.prototype, "position", {
    get: function () {
      return this._position;
    },
    set: function (e) {
      this._position = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInfiniteScrollListItem.prototype, "dispCreator", {
    get: function () {
      return this._dispCreator;
    },
    enumerable: true,
    configurable: true
  });
  return AInfiniteScrollListItem;
}(l.CastleItemRenderer);
exports.AInfiniteScrollListItem = d;
var p = require("./46.js");
a.classImplementsInterfaces(d, "ICollectableRendererList");