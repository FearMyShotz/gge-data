Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./11.js");
var a = function () {
  function FacebookSettings() {}
  FacebookSettings.FACEBOOK_JS_PATH = i.BasicConstants.DOMAIN_PROTOCOL + "://media.goodgamestudios.com/sns/lib/ext/fbLogin.js";
  FacebookSettings.FACEBOOK_JS_LOGIN_METHOD = "fbLogin";
  FacebookSettings.FACEBOOK_CALLBACK_NAME = "fbLoginCallback";
  return FacebookSettings;
}();
exports.FacebookSettings = a;