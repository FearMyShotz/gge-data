Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./336.js");
var a = require("./163.js");
var s = require("./164.js");
var r = require("./2.js").getLogger("CoreJS.PathProvider");
var o = function () {
  function PathProvider() {
    if (PathProvider._locked) {
      throw new Error(PathProvider.ERROR_LOCKED);
    }
    this._pathFactory = new i.PathFactory();
    this._data = new s.ConcreteEnvironmentData();
  }
  Object.defineProperty(PathProvider, "instance", {
    get: function () {
      if (!PathProvider._instance) {
        PathProvider._locked = false;
        PathProvider._instance = new PathProvider();
        PathProvider._locked = true;
      }
      return PathProvider._instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "networkConfigURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.networkConfigPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "countryConfigURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.countryConfigPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "zoneCapacitiesConfigURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.zoneCapacitiesConfigPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "maintenanceConfigURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.maintenanceConfigPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "branchesConfigURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.branchesConfigPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "languageConfigURL", {
    get: function () {
      r.debug("current Environment ", a.EnvironmentProvider.instance.current);
      r.debug("GET LANGUAGE CONFIG PATTERN ", this.patterns.languageConfigPathPattern);
      r.debug("GET LANGUAGE CONFIG DATA", this.data);
      return this._pathFactory.build(this.patterns.languageConfigPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "cldrConfigURL", {
    get: function () {
      r.debug("current Environment ", a.EnvironmentProvider.instance.current);
      r.debug("CLDR base URL ", this.patterns.cldrConfigPathPattern);
      return this._pathFactory.build(this.patterns.cldrConfigPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "fontsURL", {
    get: function () {
      var e;
      r.debug("fontsURL --> using VersionedFontSWF", this.data.globals.useVersionedFontSWF);
      e = this.data.globals.useVersionedFontSWF ? this.patterns.fontsSWFURLPatternVersioned : this.patterns.fontsSWFURLPattern;
      return this._pathFactory.build(e, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "dataCookieURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.dataCookiePathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "accountCookieURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.accountCookiePathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "networkCookieURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.networkCookiePathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "versionURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.versionPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "itemsVersionURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.itemsVersionPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  PathProvider.prototype.getItemSWFURL = function (e) {
    var t = this.patterns.itemSWFURLPattern;
    t = (t = t.replace("{itemIndex}", e.toString())).replace("{itemVersion}", Object(this._data.globals)["versionNumberItemLib" + e]);
    return t = this._pathFactory.build(t, this.data);
  };
  Object.defineProperty(PathProvider.prototype, "gameURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.gamePathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "assetsFolderURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.assetsFolderPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  PathProvider.prototype.getAssetURL = function (e) {
    return this.assetsFolderURL + this._itemVersions.getPath(e);
  };
  PathProvider.prototype.getInterfaceAssetURL = function (e) {
    return this.assetsFolderURL + this._interfaceVersions.getPath(e);
  };
  Object.defineProperty(PathProvider.prototype, "itemsXMLURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.itemXMLURLPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "audiosFolderURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.audiosFolderPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  PathProvider.prototype.getSoundURL = function (e) {
    return this.audiosFolderURL + e;
  };
  Object.defineProperty(PathProvider.prototype, "patterns", {
    get: function () {
      return a.EnvironmentProvider.instance.current.patterns;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "data", {
    get: function () {
      return a.EnvironmentProvider.instance.current.data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "itemVersions", {
    get: function () {
      return this._itemVersions;
    },
    set: function (e) {
      this._itemVersions = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "interfaceVersions", {
    get: function () {
      return this._interfaceVersions;
    },
    set: function (e) {
      this._interfaceVersions = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "abTestConfigURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.abTestConfigPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "abTestTrackURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.abTestTrackPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "abTestDisplayURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.abTestDisplayPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "shopURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.shopPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  PathProvider.ERROR_LOCKED = "The class is a singleton, please use PathProvider.instance instead.";
  PathProvider._locked = true;
  return PathProvider;
}();
exports.PathProvider = o;