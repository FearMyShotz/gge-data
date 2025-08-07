Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function SamuraiDaimyoEventDialogProperties(t = "") {
    var i = e.call(this) || this;
    i._preselectedTab = t;
    return i;
  }
  n.__extends(SamuraiDaimyoEventDialogProperties, e);
  Object.defineProperty(SamuraiDaimyoEventDialogProperties.prototype, "preselectedTab", {
    get: function () {
      return this._preselectedTab;
    },
    enumerable: true,
    configurable: true
  });
  return SamuraiDaimyoEventDialogProperties;
}(require("./2.js").BasicProperties);
exports.SamuraiDaimyoEventDialogProperties = o;