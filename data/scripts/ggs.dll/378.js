Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./4.js");
var s = function (e) {
  function BasicRequestSocialLoginKeysCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicRequestSocialLoginKeysCommand, e);
  BasicRequestSocialLoginKeysCommand.prototype.execute = function (e = null) {
    a.BasicModel.socialData.requestLoginKeys();
  };
  return BasicRequestSocialLoginKeysCommand;
}(require("./6.js").SimpleCommand);
exports.BasicRequestSocialLoginKeysCommand = s;