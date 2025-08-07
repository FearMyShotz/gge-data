Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./188.js");
var s = function (e) {
  function CastleTitleMainDialogProperties(t = a.ClientConstTitle.GLORY_TITLE) {
    var i = e.call(this) || this;
    i._titleSystem = t;
    return i;
  }
  n.__extends(CastleTitleMainDialogProperties, e);
  Object.defineProperty(CastleTitleMainDialogProperties.prototype, "titleSystem", {
    get: function () {
      return this._titleSystem;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTitleMainDialogProperties;
}(o.BasicProperties);
exports.CastleTitleMainDialogProperties = s;