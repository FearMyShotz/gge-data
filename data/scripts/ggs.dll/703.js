Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./31.js");
var a = require("./5.js");
var s = require("./4.js");
var r = require("./3.js");
var o = function () {
  function LODataFacade() {}
  Object.defineProperty(LODataFacade.prototype, "env", {
    get: function () {
      return a.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "httpReferer", {
    get: function () {
      return this.env.referrer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "gameId", {
    get: function () {
      return String(this.env.gameId);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "sessionId", {
    get: function () {
      return this.env.sessionId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "sessionLength", {
    get: function () {
      return Math.floor(this.env.sessionLength).toString();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "networkId", {
    get: function () {
      return String(this.env.networkId);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "instanceId", {
    get: function () {
      if (s.BasicModel.instanceProxy.selectedInstanceVO) {
        return s.BasicModel.instanceProxy.selectedInstanceVO.instanceId + "";
      } else {
        return "Not available/defined yet";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "browserUserAgent", {
    get: function () {
      return navigator.userAgent || "Not available";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "browserPlatform", {
    get: function () {
      return navigator.platform || "Not available";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "browserVendor", {
    get: function () {
      return navigator.vendor || "Not available";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "os", {
    get: function () {
      return r.Capabilities.os;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "clientVersion", {
    get: function () {
      return this.env.buildNumberGame;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "itemXMLVersion", {
    get: function () {
      return this.env.versionInformation.itemXmlVersion;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "clientType", {
    get: function () {
      var e = "all";
      if (this.env.isPreClient) {
        e = "preClient";
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "cdn", {
    get: function () {
      return this.env.cdnSubDomain;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "countryCode", {
    get: function () {
      if (i.GGSCountryController.instance.currentCountry) {
        return i.GGSCountryController.instance.currentCountry.ggsCountryCode;
      } else {
        return "Not available/defined yet";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "languageCode", {
    get: function () {
      if (i.GGSCountryController.instance.currentCountry) {
        return i.GGSCountryController.instance.currentCountry.ggsLanguageCode;
      } else {
        return "Not available/defined yet";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "isFirstVisitOfGGS", {
    get: function () {
      return this.env.isFirstVisitOfGGS.toString();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "accountId", {
    get: function () {
      return this.env.accountId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "playerId", {
    get: function () {
      if (s.BasicModel.userData) {
        return String(s.BasicModel.userData.playerID);
      } else {
        return "Not available/defined yet";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "connectionType", {
    get: function () {
      return "Not available";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "deviceType", {
    get: function () {
      if (r.Capabilities.isMobile) {
        return "Mobile";
      } else {
        return "Desktop";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "isFirstAppStartAfterUpdate", {
    get: function () {
      return "Not available";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "deviceCategory", {
    get: function () {
      return "Not available";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "isInBackground", {
    get: function () {
      return "Not available";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "sourceStore", {
    get: function () {
      return "Not available";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "performanceCategory", {
    get: function () {
      return "Not available";
    },
    enumerable: true,
    configurable: true
  });
  return LODataFacade;
}();
exports.LODataFacade = o;