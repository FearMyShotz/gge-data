Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./67.js");
var a = require("./492.js");
var s = require("./491.js");
var r = require("./48.js");
var o = require("./194.js");
var l = function () {
  function GoodgameBitmapEngine() {
    this._smoothing = false;
    this._allowQualityChangeOnBitmapCreation = true;
    this._debugShowPlaceholder = false;
  }
  Object.defineProperty(GoodgameBitmapEngine, "bulkLoader", {
    get: function () {
      return GoodgameBitmapEngine._bulkLoader;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapEngine, "instance", {
    get: function () {
      GoodgameBitmapEngine._instance ||= new GoodgameBitmapEngine();
      return GoodgameBitmapEngine._instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapEngine, "clipFactory", {
    get: function () {
      if (GoodgameBitmapEngine._clipFactory) {
        return GoodgameBitmapEngine._clipFactory;
      } else {
        r.fatal("clip factory not initalized");
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapEngine, "cacheController", {
    get: function () {
      return GoodgameBitmapEngine._cacheController;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapEngine.prototype, "smoothing", {
    get: function () {
      return this._smoothing;
    },
    set: function (e) {
      this._smoothing = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapEngine.prototype, "pixelSnapping", {
    get: function () {
      return "";
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapEngine, "useCacheAsBitmapForDisplayObjects", {
    get: function () {
      return GoodgameBitmapEngine._useCacheAsBitmapForDisplayObjects;
    },
    set: function (e) {
      GoodgameBitmapEngine._useCacheAsBitmapForDisplayObjects = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapEngine.prototype, "debugShowPlaceholder", {
    get: function () {
      return this._debugShowPlaceholder;
    },
    set: function (e) {
      this._debugShowPlaceholder = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapEngine.prototype, "animationManager", {
    get: function () {
      if (this._animationManager) {
        return this._animationManager;
      } else {
        r.fatal("animation manager not initalized");
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapEngine, "stage", {
    get: function () {
      return GoodgameBitmapEngine._stage;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameBitmapEngine.setStageQuality = function (e) {
    GoodgameBitmapEngine._stage;
  };
  GoodgameBitmapEngine.prototype.init = function (e, t = false, n = null) {
    GoodgameBitmapEngine._stage = e;
    GoodgameBitmapEngine._bulkLoader = n || new i.BulkLoader("BitmapEngineLoader");
    this._animationManager = new s.AnimationManager();
    GoodgameBitmapEngine._clipFactory = new a.ClipSourceFactory(t);
    GoodgameBitmapEngine._cacheController = new o.ClipCacheController();
  };
  Object.defineProperty(GoodgameBitmapEngine, "itemJsonData", {
    get: function () {
      return GoodgameBitmapEngine._itemJsonData;
    },
    set: function (e) {
      GoodgameBitmapEngine._itemJsonData = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapEngine.prototype, "allowQualityChangeOnBitmapCreation", {
    get: function () {
      return this._allowQualityChangeOnBitmapCreation;
    },
    set: function (e) {
      this._allowQualityChangeOnBitmapCreation = e;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameBitmapEngine.numConnections = 0;
  GoodgameBitmapEngine._useCacheAsBitmapForDisplayObjects = true;
  return GoodgameBitmapEngine;
}();
exports.GoodgameBitmapEngine = l;