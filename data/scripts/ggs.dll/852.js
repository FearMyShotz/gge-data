Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./5.js");
var a = require("./4.js");
var s = require("./37.js");
var r = function () {
  function BasicSharedObject() {
    this.networkCookie = a.BasicModel.networkCookie;
    this.saveFileSize(this.env.gameFileSize);
  }
  BasicSharedObject.prototype.readLoginDataUsername = function () {
    return this.networkCookie.username;
  };
  BasicSharedObject.prototype.readLoginDataEmail = function () {
    return this.networkCookie.email;
  };
  BasicSharedObject.prototype.readLoginDataLoginToken = function () {
    return this.networkCookie.loginToken;
  };
  BasicSharedObject.prototype.readLoginDataLanguage = function () {
    return this.networkCookie.getAttributeAsString("language");
  };
  BasicSharedObject.prototype.saveLoginData = function (e, t) {
    this.networkCookie.saveLoginData(e, t);
  };
  BasicSharedObject.prototype.deleteLoginData = function () {
    this.networkCookie.deleteLoginData();
  };
  BasicSharedObject.prototype.saveLanguageData = function (e) {
    this.networkCookie.setAttribute("language", e);
  };
  BasicSharedObject.prototype.saveCountryData = function (e) {
    this.networkCookie.country = e;
  };
  BasicSharedObject.prototype.savePlayerID = function (e) {
    this.networkCookie.setAttribute("playerID", e);
  };
  BasicSharedObject.prototype.readSelectedServer = function () {
    return this.networkCookie.getAttributeAsString("selectedServer");
  };
  BasicSharedObject.prototype.saveSelectedServer = function (e) {
    this.networkCookie.setAttribute("selectedServer", e);
  };
  BasicSharedObject.prototype.readSoundSettings = function () {
    var e = [];
    if (this.networkCookie.hasAttribute("soundSettings")) {
      var t = this.networkCookie.getAttribute("soundSettings");
      if (typeof t == "string") {
        try {
          e = JSON.parse(t);
        } catch (t) {
          e = [];
        }
      } else if (Array.isArray(t)) {
        e = t;
      }
    }
    return e;
  };
  BasicSharedObject.prototype.saveSoundSettings = function (e) {
    this.networkCookie.setAttribute("soundSettings", e);
  };
  BasicSharedObject.prototype.readInstanceId = function () {
    return this.networkCookie.instanceId;
  };
  Object.defineProperty(BasicSharedObject.prototype, "hasInstanceId", {
    get: function () {
      return this.networkCookie.hasInstanceId;
    },
    enumerable: true,
    configurable: true
  });
  BasicSharedObject.prototype.saveInstance = function (e, t) {
    this.networkCookie.instanceId = e;
    this.networkCookie.zoneId = t.toString();
  };
  BasicSharedObject.prototype.saveFileSize = function (e) {
    this.networkCookie.setAttribute("fileSize", e);
  };
  BasicSharedObject.prototype.saveFirstFrameSize = function (e) {
    s.info(" saving size of first frame to cookie:" + e + "KB.");
    this.networkCookie.setAttribute("firstFrameSizeInKB_" + this.readInstanceId(), e);
  };
  BasicSharedObject.prototype.readFirstFrameSize = function () {
    var e;
    e = this.networkCookie.hasAttribute("firstFrameSize") && this.networkCookie.getAttribute("firstFrameSize") != null ? this.networkCookie.getAttributeAsNumber("firstFrameSize") : -1;
    s.info("first frame size as read from cookie:" + e + "KB");
    return e;
  };
  BasicSharedObject.prototype.readIsSocialNetwork = function () {
    return !!this.networkCookie.hasAttribute("isSocialNetwork") && this.networkCookie.getAttributeAsBoolean("isSocialNetwork");
  };
  BasicSharedObject.prototype.saveIsSocialNetwork = function (e) {
    this.networkCookie.setAttribute("isSocialNetwork", e);
  };
  Object.defineProperty(BasicSharedObject.prototype, "env", {
    get: function () {
      return i.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicSharedObject;
}();
exports.BasicSharedObject = r;