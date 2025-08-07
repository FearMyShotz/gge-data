Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleTitleAchievedDialogProperties(t, i = false) {
    var n = this;
    n._alreadyAchieved = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this)._title = t;
    n._alreadyAchieved = i;
    return n;
  }
  n.__extends(CastleTitleAchievedDialogProperties, e);
  Object.defineProperty(CastleTitleAchievedDialogProperties.prototype, "title", {
    get: function () {
      return this._title;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleAchievedDialogProperties.prototype, "alreadyAchieved", {
    get: function () {
      return this._alreadyAchieved;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTitleAchievedDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleTitleAchievedDialogProperties = o;