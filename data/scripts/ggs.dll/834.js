Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./5.js");
var a = require("./835.js");
var s = function () {
  function JavascriptCallSetLanguageFactory() {}
  JavascriptCallSetLanguageFactory.prototype.createVO = function () {
    return new a.JavascriptCallSetLanguageVO(this.env.currentCountryLanguageCode);
  };
  Object.defineProperty(JavascriptCallSetLanguageFactory.prototype, "env", {
    get: function () {
      return i.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return JavascriptCallSetLanguageFactory;
}();
exports.JavascriptCallSetLanguageFactory = s;