Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function UncaughtErrorEventHandler() {}
  UncaughtErrorEventHandler.init = function (e, t = false) {
    UncaughtErrorEventHandler._onlyLogUniqueErrors = t;
  };
  UncaughtErrorEventHandler.uncaughtErrorHandler = function (e) {};
  UncaughtErrorEventHandler.errorLog = [];
  return UncaughtErrorEventHandler;
}();
exports.UncaughtErrorEventHandler = i;