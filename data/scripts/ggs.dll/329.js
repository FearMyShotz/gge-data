Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./4.js");
var a = function () {
  function BasicUserData() {
    this._userLevel = 1;
    this._email = "";
    this._userID = -1;
    this._playerID = -1;
  }
  BasicUserData.prototype.isGuest = function () {
    return this.playerID === -1;
  };
  Object.defineProperty(BasicUserData.prototype, "userName", {
    get: function () {
      return this._userName || "";
    },
    set: function (e) {
      this._userName = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUserData.prototype, "userNameSet", {
    get: function () {
      return this._userName.length > 0 || this._userName !== "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUserData.prototype, "userLevel", {
    get: function () {
      return this._userLevel;
    },
    set: function (e) {
      if (this._userLevel !== e) {
        this._userLevel = e;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUserData.prototype, "loginPwd", {
    get: function () {
      return this._loginPwd;
    },
    set: function (e) {
      this._loginPwd = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUserData.prototype, "loginToken", {
    get: function () {
      return this._loginToken;
    },
    set: function (e) {
      this._loginToken = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUserData.prototype, "email", {
    get: function () {
      return this._email;
    },
    set: function (e) {
      this._email = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUserData.prototype, "userID", {
    get: function () {
      return this._userID;
    },
    set: function (e) {
      this._userID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUserData.prototype, "playerID", {
    get: function () {
      return this._playerID;
    },
    set: function (e) {
      this._playerID = e;
      i.BasicModel.localData.savePlayerID(e);
    },
    enumerable: true,
    configurable: true
  });
  return BasicUserData;
}();
exports.BasicUserData = a;