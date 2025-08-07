Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./363.js");
var a = require("./172.js");
var s = require("./18.js");
var r = function () {
  function VersionInformation() {
    this._additionalItemXMLInfo = "";
    this._additionalLanguageXMLInfo = "";
  }
  Object.defineProperty(VersionInformation, "versionInstance", {
    get: function () {
      VersionInformation._versionInstance ||= new VersionInformation();
      return VersionInformation._versionInstance;
    },
    enumerable: true,
    configurable: true
  });
  VersionInformation.prototype.parseItemXML = function (e) {
    var t = e.child("versionInfo");
    this.itemXmlVersion = t.attribute("version");
    this.parseAdditionlItemXMLVersionInfo(t);
  };
  VersionInformation.prototype.parseLanguageXml = function (e) {
    VersionInformation._languageXmlVersion = s.TextsParser.parseVersionNo(e) + "|" + s.TextsParser.parseDeployTime(e);
  };
  VersionInformation.prototype.parseAdditionlItemXMLVersionInfo = function (e) {};
  Object.defineProperty(VersionInformation.prototype, "itemXmlVersion", {
    get: function () {
      return VersionInformation._itemXmlVersion;
    },
    set: function (e) {
      VersionInformation._itemXmlVersion = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "languageXmlVersion", {
    get: function () {
      return VersionInformation._languageXmlVersion;
    },
    set: function (e) {
      VersionInformation._languageXmlVersion = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "versionNumberItemXMLString", {
    get: function () {
      return this.itemXmlVersion + this._additionalItemXMLInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "versionNumberLanguageXMLString", {
    get: function () {
      return this.itemXmlVersion + this._additionalLanguageXMLInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "buildNumberGame", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "versionNumberGame", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "buildNumberServer", {
    get: function () {
      return VersionInformation._buildNumberServer;
    },
    set: function (e) {
      VersionInformation._buildNumberServer = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "basicVersionNumberItemsXML", {
    get: function () {
      return a.BasicVersions.itemXMLVersion;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "basicVersionNumberLanguageXML", {
    get: function () {
      return i.BasicLanguageVersion.VERSION;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "formatVersionNumberGame", {
    get: function () {
      return "V" + this.versionNumberGame;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "formatBuildNumberGame", {
    get: function () {
      return " B" + this.buildNumberGame;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "formatItemXmlVersionNumber", {
    get: function () {
      if (VersionInformation._itemXmlVersion) {
        return " iXML" + VersionInformation._itemXmlVersion;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "formatBuildNumberServer", {
    get: function () {
      if (VersionInformation._buildNumberServer) {
        return " S" + VersionInformation._buildNumberServer;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "formatLanguageVersionNumber", {
    get: function () {
      return " lXML" + this.languageXmlVersion;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "versionText", {
    get: function () {
      return this.getVersionText();
    },
    enumerable: true,
    configurable: true
  });
  VersionInformation.prototype.getVersionText = function () {
    return this.formatVersionNumberGame + this.formatBuildNumberGame + this.formatBuildNumberServer + this.formatItemXmlVersionNumber + this.formatLanguageVersionNumber;
  };
  return VersionInformation;
}();
exports.VersionInformation = r;