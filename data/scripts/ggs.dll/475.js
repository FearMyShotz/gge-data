Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./3.js");
var a = require("./2.js").getLogger("CoreJS.BasicJSVariables");
var s = function () {
  function BasicJSVariables() {}
  BasicJSVariables.prototype.readVariablesFromJavaScript = function () {
    var e = this;
    if (this._initialized) {
      return Promise.resolve("already initialized");
    } else {
      a.info("readVariablesFromJavaScript: journeyHash");
      return new Promise(function (t, n) {
        i.ExternalInterface.asyncCall("journeyHash").then(function (n) {
          a.info("journeyHash: ", n);
          e._initialized = true;
          e._journeyHash = n;
          t(n);
        }).catch(function (n) {
          e._initialized = true;
          a.warn(n);
          t(n);
        });
      });
    }
  };
  BasicJSVariables.prototype.toString = function () {
    return "journeyHash: " + this._journeyHash;
  };
  Object.defineProperty(BasicJSVariables.prototype, "journeyHash", {
    get: function () {
      if (!this._initialized) {
        throw new Error("BasicJSVariables is not initialized!");
      }
      return this._journeyHash;
    },
    enumerable: true,
    configurable: true
  });
  return BasicJSVariables;
}();
exports.BasicJSVariables = s;