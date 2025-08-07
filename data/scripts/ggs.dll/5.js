Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function EnvGlobalsHandler() {}
  Object.defineProperty(EnvGlobalsHandler, "globals", {
    get: function () {
      if (EnvGlobalsHandler._envGlobals == null) {
        throw new Error("The environment globals are not initialized by game.");
      }
      return EnvGlobalsHandler._envGlobals;
    },
    enumerable: true,
    configurable: true
  });
  EnvGlobalsHandler.setEnvGlobalsClass = function (e) {
    EnvGlobalsHandler._envGlobals = e;
  };
  return EnvGlobalsHandler;
}();
exports.EnvGlobalsHandler = i;