Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function ConcreteEnvironmentPatterns() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(ConcreteEnvironmentPatterns, e);
  Object.defineProperty(ConcreteEnvironmentPatterns.prototype, "branchesConfigPathPattern", {
    get: function () {
      return this._branchesConfigPathPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentPatterns.prototype, "dataCookiePathPattern", {
    get: function () {
      return this._dataCookiePathPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentPatterns.prototype, "refCountURLPattern", {
    get: function () {
      return this._refCountURLPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentPatterns.prototype, "languagePropertiesPathPattern", {
    get: function () {
      return this._languagePropertiesPathPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentPatterns.prototype, "cldrConfigPathPattern", {
    get: function () {
      return this._cldrConfigPathPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentPatterns.prototype, "fontsSWFURLPattern", {
    get: function () {
      return this._fontsSWFURLPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentPatterns.prototype, "fontsSWFURLPatternVersioned", {
    get: function () {
      return this._fontsSWFURLPatternVersioned;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentPatterns.prototype, "itemSWFURLPattern", {
    get: function () {
      return this._itemSWFURLPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentPatterns.prototype, "itemXMLURLPattern", {
    get: function () {
      return this._itemXMLURLPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentPatterns.prototype, "abTestConfigPathPattern", {
    get: function () {
      return this._abTestConfigPathPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentPatterns.prototype, "abTestTrackPathPattern", {
    get: function () {
      return this._abTestTrackPathPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentPatterns.prototype, "abTestDisplayPathPattern", {
    get: function () {
      return this._abTestDisplayPathPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentPatterns.prototype, "audiosFolderPathPattern", {
    get: function () {
      return this._audiosFolderPathPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentPatterns.prototype, "shopPathPattern", {
    get: function () {
      return this._shopPathPattern;
    },
    enumerable: true,
    configurable: true
  });
  return ConcreteEnvironmentPatterns;
}(require("./458.js").BaseEnvironmentPatterns);
exports.ConcreteEnvironmentPatterns = a;