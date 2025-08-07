Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./178.js");
var s = require("./6.js");
var r = require("./3.js");
var o = function (e) {
  function BasicFacebookConnectCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicFacebookConnectCommand, e);
  BasicFacebookConnectCommand.prototype.execute = function (e = null) {
    r.ExternalInterface.addCallback(a.FacebookSettings.FACEBOOK_CALLBACK_NAME, this.bindFunction(this.jsFacebookLoginCallback));
    r.ExternalInterface.call(a.FacebookSettings.FACEBOOK_JS_LOGIN_METHOD, BasicFacebookConnectCommand.gameID);
  };
  BasicFacebookConnectCommand.prototype.jsFacebookLoginCallback = function (e, t, n, i) {};
  return BasicFacebookConnectCommand;
}(s.SimpleCommand);
exports.BasicFacebookConnectCommand = o;