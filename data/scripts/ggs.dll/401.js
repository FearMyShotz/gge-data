Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./178.js");
var s = require("./6.js");
var r = require("./78.js");
var o = require("./3.js");
var l = function (e) {
  function BasicInitializeFacebookConnectCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicInitializeFacebookConnectCommand, e);
  BasicInitializeFacebookConnectCommand.prototype.loadJS = function (e) {};
  BasicInitializeFacebookConnectCommand.prototype.checkIfJsFunctionExists = function (e) {
    return false;
  };
  BasicInitializeFacebookConnectCommand.prototype.execute = function (e = null) {
    if (o.ExternalInterface.available) {
      if (!this.checkIfJsFunctionExists(a.FacebookSettings.FACEBOOK_JS_LOGIN_METHOD)) {
        this.loadJS(a.FacebookSettings.FACEBOOK_JS_PATH);
      }
    }
  };
  i.__decorate([r.commentedOut("", "Facebook Connect - ExternalInterface - Page Integration stuff"), i.__metadata("design:type", Function), i.__metadata("design:paramtypes", [String]), i.__metadata("design:returntype", undefined)], BasicInitializeFacebookConnectCommand.prototype, "loadJS", null);
  return BasicInitializeFacebookConnectCommand;
}(s.SimpleCommand);
exports.BasicInitializeFacebookConnectCommand = l;