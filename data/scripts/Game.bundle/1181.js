Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function AIsoCommand() {
    var t = this;
    t._isExecuted = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AIsoCommand, e);
  AIsoCommand.prototype.execute = function () {};
  Object.defineProperty(AIsoCommand.prototype, "isExecuted", {
    get: function () {
      return this._isExecuted;
    },
    set: function (e) {
      this._isExecuted = e;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoCommand;
}(require("./14.js").CastleComponent);
exports.AIsoCommand = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");