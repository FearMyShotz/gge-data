Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./26.js");
var s = require("./8.js");
var r = require("./9.js");
var o = require("./4.js");
var l = require("./12.js");
var u = require("./37.js");
var c = function (e) {
  function SPECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(SPECommand, e);
  Object.defineProperty(SPECommand.prototype, "cmdId", {
    get: function () {
      return r.BasicSmartfoxConstants.S2C_SOCIAL_PLAYER_EXISTS;
    },
    enumerable: true,
    configurable: true
  });
  SPECommand.prototype.executeCommand = function (e, t) {
    var n;
    u.info("error: " + e + ", params: " + t);
    if (e == SPECommand.PLAYER_DOES_NOT_EXIST) {
      n = "";
    } else if (e == SPECommand.PLAYER_EXISTS) {
      this.env.isFirstVisit = false;
      n = t[1];
    }
    o.BasicModel.socialData.setDisplayNameExistingPlayer(n);
    l.CommandController.instance.executeCommand(s.BasicController.CHOOSE_LOGIN_METHOD);
    return false;
  };
  SPECommand.PLAYER_DOES_NOT_EXIST = 0;
  SPECommand.PLAYER_EXISTS = 1;
  return SPECommand;
}(a.BasicCommand);
exports.SPECommand = c;