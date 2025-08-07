Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function CastleEventDispatcher() {
    return e.call(this) || this;
  }
  n.__extends(CastleEventDispatcher, e);
  Object.defineProperty(CastleEventDispatcher.prototype, "castleEnv", {
    get: function () {
      return o.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEventDispatcher;
}(createjs.EventDispatcher);
exports.CastleEventDispatcher = a;