Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = function () {
  function ClientConstReCaptcha() {}
  ClientConstReCaptcha.getSiteKey = function () {
    if (n.EnvGlobalsHandler.globals.isLocal) {
      return ClientConstReCaptcha.RECAPTCHA_SITE_KEY_LOCAL;
    } else if (n.EnvGlobalsHandler.globals.isTest) {
      return ClientConstReCaptcha.RECAPTCHA_SITE_KEY_TEST;
    } else {
      return ClientConstReCaptcha.RECAPTCHA_SITE_KEY;
    }
  };
  ClientConstReCaptcha.RECAPTCHA_SITE_KEY_LOCAL = "6Lf0aFooAAAAAASMeebUEt4Y9ir7jbXfLCPEWnrA";
  ClientConstReCaptcha.RECAPTCHA_SITE_KEY_TEST = "6Lf0aFooAAAAAASMeebUEt4Y9ir7jbXfLCPEWnrA";
  ClientConstReCaptcha.RECAPTCHA_SITE_KEY = "6Lc7w34oAAAAAFKhfmln41m96VQm4MNqEdpCYm-k";
  return ClientConstReCaptcha;
}();
exports.ClientConstReCaptcha = o;