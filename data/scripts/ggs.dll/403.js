Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./404.js");
var s = require("./23.js");
var r = require("./67.js");
var o = require("./5.js");
var l = require("./43.js");
var u = require("./405.js");
var c = function (e) {
  function BasicLoaderData() {
    var t = e.call(this) || this;
    t._appLoader = new u.GoodgameLoader("appLoader");
    t._assetLoader = new r.BulkLoader("assetLoader");
    t.ASSET_NOT_VERSIONED_FLAG = "/undefined";
    t._assetLoader.loadQueue.maintainScriptOrder = false;
    return t;
  }
  i.__extends(BasicLoaderData, e);
  Object.defineProperty(BasicLoaderData.prototype, "appLoader", {
    get: function () {
      return this._appLoader;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicLoaderData.prototype, "assetLoader", {
    get: function () {
      return this._assetLoader;
    },
    enumerable: true,
    configurable: true
  });
  BasicLoaderData.prototype.getVersionedItemAssetUrl = function (e) {
    var t;
    this.checkAssetUrlAndDisplayErrors(e, this.bindFunction(this.isItemAssetVersioned), "ITEMVERSIONS");
    t = l.PathProvider.instance.getAssetURL(e);
    this.checkAssetUrl(t, e, "ITEMVERSIONS");
    return t;
  };
  BasicLoaderData.prototype.isItemAssetVersioned = function (e) {
    var t;
    t = l.PathProvider.instance.getAssetURL(e);
    return this.checkAssetUrlForNotNull(t);
  };
  BasicLoaderData.prototype.loadVersionedItemAsset = function (e, t = 0) {
    var n = this.getVersionedItemAssetUrl(e);
    return this.loadAsset(n, e, t);
  };
  BasicLoaderData.prototype.getVersionedInterfaceAssetUrl = function (e) {
    var t;
    this.checkAssetUrlAndDisplayErrors(e, this.bindFunction(this.isInterfaceAssetVersioned), "INTERFACEVERSIONS");
    t = l.PathProvider.instance.getInterfaceAssetURL(e);
    this.checkAssetUrl(t, e, "INTERFACEVERSIONS");
    return t;
  };
  BasicLoaderData.prototype.isInterfaceAssetVersioned = function (e) {
    var t;
    t = l.PathProvider.instance.getInterfaceAssetURL(e);
    return this.checkAssetUrlForNotNull(t);
  };
  BasicLoaderData.prototype.loadVersionedInterfaceAsset = function (e, t = 0) {
    var n = this.getVersionedInterfaceAssetUrl(e);
    return this.loadAsset(n, e, t);
  };
  BasicLoaderData.prototype.checkAssetUrlAndDisplayErrors = function (e, t, n) {
    if (!t.call(this, e)) {
      if (o.EnvGlobalsHandler.globals.isTest || o.EnvGlobalsHandler.globals.isTest) {
        throw new Error("ASSET_NOT_VERSIONED_IN_" + n + ": " + e);
      }
      s.ExternalLog.logger.log(new a.FileErrorLOFactory(a.FileErrorLOFactory.ASSET_NOT_VERSIONED_FILE_ERROR, e));
    }
  };
  BasicLoaderData.prototype.checkAssetUrlForNotNull = function (e) {
    return e.indexOf(this.ASSET_NOT_VERSIONED_FLAG) == -1;
  };
  BasicLoaderData.prototype.checkAssetUrl = function (e, t, n) {
    var i;
    if (e.indexOf(this.ASSET_NOT_VERSIONED_FLAG) == -1) {
      i = true;
    } else {
      i = false;
      s.ExternalLog.logger.log(new a.FileErrorLOFactory(a.FileErrorLOFactory.ASSET_NOT_VERSIONED_FILE_ERROR, t));
    }
    return i;
  };
  BasicLoaderData.prototype.loadAsset = function (e, t, n) {
    var i;
    if (n === undefined) {
      n = 0;
    }
    if (this.checkAssetUrlForNotNull(e)) {
      var a = {
        id: t,
        priority: n
      };
      i = this.assetLoader.addAssetBundle(e, a);
    }
    return i;
  };
  BasicLoaderData.prototype.wasAssetLoaded = function (e) {
    if (this.isInterfaceAssetVersioned(e)) {
      var t = this.getVersionedInterfaceAssetUrl(e);
      return this._assetLoader.isLoaded(t);
    }
    if (this.isItemAssetVersioned(e)) {
      var n = this.getVersionedItemAssetUrl(e);
      return this._assetLoader.isLoaded(n);
    }
    return false;
  };
  return BasicLoaderData;
}(createjs.EventDispatcher);
exports.BasicLoaderData = c;