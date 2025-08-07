Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function ConcreteEnvironmentData() {}
  Object.defineProperty(ConcreteEnvironmentData.prototype, "globals", {
    get: function () {
      return this._globals;
    },
    set: function (e) {
      this._globals = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "cdnSubDomain", {
    get: function () {
      return this._globals.cdnSubDomain;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "domain", {
    get: function () {
      return this._globals.domain;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "gameId", {
    get: function () {
      if (this._globals.gameId !== undefined) {
        return this._globals.gameId.toString();
      } else {
        return "GAME_ID_NOT_SET";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "gameTitle", {
    get: function () {
      return this._globals.gameTitle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "officialName", {
    get: function () {
      if (this.gameId == "15") {
        return "bigfarm";
      } else {
        return "empire";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "gameFileName", {
    get: function () {
      if (this._globals.gameTitle !== undefined) {
        return this._globals.gameTitle.toLowerCase();
      } else {
        return "GAME_TITLE_NOT_SET";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "gameVersion", {
    get: function () {
      return this._globals.versionInformation.versionNumberGame;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "formattedGameVersion", {
    get: function () {
      return this._globals.buildNumberGame;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "networkId", {
    get: function () {
      return this._globals.networkId.toString();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "languageCode", {
    get: function () {
      return this._globals.currentCountryLanguageCode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "baseURL", {
    get: function () {
      return this._globals.baseURL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "baseAssetsURL", {
    get: function () {
      return this._globals.baseAssetsURL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "branchId", {
    get: function () {
      return this._globals.branchId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "branchVersion", {
    get: function () {
      return this._globals.branchVersion;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "featureBranchId", {
    get: function () {
      return this._globals.featureBranchId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "featureBranchEnvironment", {
    get: function () {
      return this._globals.featureBranchEnvironment;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "countryVersion", {
    get: function () {
      return "latest";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "networkVersion", {
    get: function () {
      return "latest";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "languageVersion", {
    get: function () {
      return this._globals.currentCountryLanguageVersion.toString();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "itemsXMLVersion", {
    get: function () {
      return this._globals.versionInformation.basicVersionNumberItemsXML;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "fontVersion", {
    get: function () {
      return this._globals.langVersionDict.get(this._globals.currentCountryLanguageCode);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "zipSuffix", {
    get: function () {
      if (this._globals.useZipXMLs) {
        return "ggs";
      } else {
        return "xml";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "shopBaseUrl", {
    get: function () {
      if (this._globals.isTest) {
        return "://shop-test";
      } else {
        return "://itemshop";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "protocol", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConcreteEnvironmentData.prototype, "ggsLanguageCode", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  return ConcreteEnvironmentData;
}();
exports.ConcreteEnvironmentData = i;