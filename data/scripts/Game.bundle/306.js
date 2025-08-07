Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./118.js");
var r = require("./850.js").version;
exports.appVersion = require("./851.js").version;
var l = function (e) {
  var t = e.split(".");
  var i = t[0];
  var n = t[1];
  var o = t[2];
  for (o.indexOf("-") && (o = o.split("-")[0]); n.length < 3;) {
    n = "0" + n;
  }
  while (o.length < 3) {
    o = "0" + o;
  }
  return i + n + o;
}(exports.appVersion);
var c = s.getLogger("CastleVersionInformation");
var u = function (e) {
  function CastleVersionInformation() {
    return e.call(this) || this;
  }
  n.__extends(CastleVersionInformation, e);
  Object.defineProperty(CastleVersionInformation, "versionInstance", {
    get: function () {
      if (!CastleVersionInformation._castleVersionInstance) {
        CastleVersionInformation._castleVersionInstance = new CastleVersionInformation();
        c.info("Game Version " + CastleVersionInformation._castleVersionInstance.buildNumberGame);
      }
      return CastleVersionInformation._castleVersionInstance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVersionInformation.prototype, "versionNumberGame", {
    get: function () {
      return exports.appVersion;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVersionInformation.prototype, "buildNumberGame", {
    get: function () {
      return l;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVersionInformation.prototype, "clientVersionString", {
    get: function () {
      return "C" + this.versionNumberGame;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVersionInformation.prototype, "versionText", {
    get: function () {
      return this.clientVersionString + ", A" + r + "\n" + this.formatBuildNumberServer + " \nC" + this.formatItemXmlVersionNumber + " \nS iXML" + this.serverXMLVersion + " \n" + this.formatLanguageVersionNumber;
    },
    enumerable: true,
    configurable: true
  });
  return CastleVersionInformation;
}(o.VersionInformation);
exports.CastleVersionInformation = u;
a.classImplementsInterfaces(u, "IVersionInformation");