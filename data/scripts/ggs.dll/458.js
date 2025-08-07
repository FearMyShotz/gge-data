Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function BaseEnvironmentPatterns() {}
  BaseEnvironmentPatterns.prototype.init = function () {
    throw new Error("Please override this method on the concrete implementation of the Environment.");
  };
  Object.defineProperty(BaseEnvironmentPatterns.prototype, "networkConfigPathPattern", {
    get: function () {
      return this._networkConfigPathPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaseEnvironmentPatterns.prototype, "countryConfigPathPattern", {
    get: function () {
      return this._countryConfigPathPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaseEnvironmentPatterns.prototype, "zoneCapacitiesConfigPathPattern", {
    get: function () {
      return this._zoneCapacitiesConfigPathPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaseEnvironmentPatterns.prototype, "maintenanceConfigPathPattern", {
    get: function () {
      return this._maintenanceConfigPathPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaseEnvironmentPatterns.prototype, "languageConfigPathPattern", {
    get: function () {
      return this._languageConfigPathPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaseEnvironmentPatterns.prototype, "accountCookiePathPattern", {
    get: function () {
      return this._accountCookiePathPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaseEnvironmentPatterns.prototype, "networkCookiePathPattern", {
    get: function () {
      return this._networkCookiePathPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaseEnvironmentPatterns.prototype, "versionPathPattern", {
    get: function () {
      return this._versionPathPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaseEnvironmentPatterns.prototype, "itemsVersionPathPattern", {
    get: function () {
      return this._itemsVersionPathPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaseEnvironmentPatterns.prototype, "gamePathPattern", {
    get: function () {
      return this._gameUrlPathPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaseEnvironmentPatterns.prototype, "assetsFolderPathPattern", {
    get: function () {
      return this._assetsFolderPathPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaseEnvironmentPatterns.prototype, "fontsSwfPathPattern", {
    get: function () {
      return this._fontsFolderPathPattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaseEnvironmentPatterns.prototype, "itemsXMLPathPattern", {
    get: function () {
      return this._itemsXMLPathPattern;
    },
    enumerable: true,
    configurable: true
  });
  return BaseEnvironmentPatterns;
}();
exports.BaseEnvironmentPatterns = i;