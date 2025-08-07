Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function DecorationForgeMainDialogProperties(t) {
    var i = e.call(this) || this;
    i._preselectedDeco = t;
    return i;
  }
  n.__extends(DecorationForgeMainDialogProperties, e);
  Object.defineProperty(DecorationForgeMainDialogProperties.prototype, "preselectedDeco", {
    get: function () {
      return this._preselectedDeco;
    },
    enumerable: true,
    configurable: true
  });
  return DecorationForgeMainDialogProperties;
}(require("./2.js").BasicProperties);
exports.DecorationForgeMainDialogProperties = o;