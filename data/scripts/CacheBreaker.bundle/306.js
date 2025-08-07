Object.defineProperty(exports, "__esModule", {
  value: true
});
var o = require("./0.js");
var r = require("./2.js");
var s = require("./1.js");
var i = require("./118.js");
var a = require("./850.js").version;
exports.appVersion = require("./851.js").version;
var l = function (e) {
  var t = e.split(".");
  var n = t[0];
  var o = t[1];
  var r = t[2];
  for (r.indexOf("-") && (r = r.split("-")[0]); o.length < 3;) {
    o = "0" + o;
  }
  while (r.length < 3) {
    r = "0" + r;
  }
  return n + o + r;
}(exports.appVersion);
var c = i.getLogger("CastleVersionInformation");
var p = function (e) {
  function CastleVersionInformation() {
    return e.call(this) || this;
  }
  o.__extends(CastleVersionInformation, e);
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
      return this.clientVersionString + ", A" + a + "\n" + this.formatBuildNumberServer + " \nC" + this.formatItemXmlVersionNumber + " \nS iXML" + this.serverXMLVersion + " \n" + this.formatLanguageVersionNumber;
    },
    enumerable: true,
    configurable: true
  });
  return CastleVersionInformation;
}(r.VersionInformation);
exports.CastleVersionInformation = p;
s.classImplementsInterfaces(p, "IVersionInformation");