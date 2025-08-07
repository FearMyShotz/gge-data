Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function OptionsDialogProperties(t = 0, i = false) {
    var n = e.call(this) || this;
    n.tabID = t;
    n._shownewsletter = i;
    return n;
  }
  n.__extends(OptionsDialogProperties, e);
  Object.defineProperty(OptionsDialogProperties.prototype, "shownewsletter", {
    get: function () {
      var e = this._shownewsletter;
      this._shownewsletter = false;
      return e;
    },
    enumerable: true,
    configurable: true
  });
  return OptionsDialogProperties;
}(require("./2.js").BasicProperties);
exports.OptionsDialogProperties = o;