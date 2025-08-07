Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./264.js");
var a = require("./265.js");
var s = require("./266.js");
var r = require("./267.js");
var o = require("./329.js");
var l = require("./330.js");
var u = require("./334.js");
var c = require("./161.js");
var _ = function () {
  function BasicModel() {}
  Object.defineProperty(BasicModel, "smartfoxClient", {
    get: function () {
      return BasicModel._smartfoxClient;
    },
    set: function (e) {
      BasicModel._smartfoxClient = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "userData", {
    get: function () {
      BasicModel._userData ||= new o.BasicUserData();
      return BasicModel._userData;
    },
    set: function (e) {
      BasicModel._userData = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "socialData", {
    get: function () {
      return BasicModel._socialData;
    },
    set: function (e) {
      BasicModel._socialData = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "languageData", {
    get: function () {
      return BasicModel._languageData;
    },
    set: function (e) {
      BasicModel._languageData = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "fontData", {
    get: function () {
      return BasicModel._fontData;
    },
    set: function (e) {
      BasicModel._fontData = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "achievementData", {
    get: function () {
      return BasicModel._achievementData;
    },
    set: function (e) {
      BasicModel._achievementData = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "localData", {
    get: function () {
      return BasicModel._localData;
    },
    set: function (e) {
      BasicModel._localData = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "networkCookie", {
    get: function () {
      return BasicModel._networkCookie;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "sessionData", {
    get: function () {
      BasicModel._sessionData ||= new r.BasicSessionData();
      return BasicModel._sessionData;
    },
    set: function (e) {
      BasicModel._sessionData = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "basicLoaderData", {
    get: function () {
      return BasicModel._basicLoaderData;
    },
    set: function (e) {
      BasicModel._basicLoaderData = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "basicLocalization", {
    get: function () {
      BasicModel._localizationData ||= new s.BasicLocalizationData();
      return BasicModel._localizationData;
    },
    set: function (e) {
      BasicModel._localizationData = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "identityManagement", {
    get: function () {
      return BasicModel._identityManagement;
    },
    set: function (e) {
      BasicModel._identityManagement = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "forumData", {
    get: function () {
      BasicModel._forumData ||= new l.ForumData();
      return BasicModel._forumData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "ageGateData", {
    get: function () {
      BasicModel._ageGateData ||= new a.AgeGateData();
      return BasicModel._ageGateData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicModel, "branchesModel", {
    get: function () {
      return BasicModel._branchesModel ||= new c.BranchesModel();
    },
    enumerable: true,
    configurable: true
  });
  BasicModel.instanceProxy = new u.InstanceVOProxy();
  BasicModel._networkCookie = new i.NetworkCookie();
  return BasicModel;
}();
exports.BasicModel = _;