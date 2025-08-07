Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleLegendSkillDialogProperties(t, i) {
    var n = e.call(this) || this;
    n._jumpToTabId = t;
    n._jumpToSkillId = i;
    return n;
  }
  n.__extends(CastleLegendSkillDialogProperties, e);
  Object.defineProperty(CastleLegendSkillDialogProperties.prototype, "jumpToTabId", {
    get: function () {
      return this._jumpToTabId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillDialogProperties.prototype, "jumpToSkillId", {
    get: function () {
      return this._jumpToSkillId;
    },
    enumerable: true,
    configurable: true
  });
  return CastleLegendSkillDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleLegendSkillDialogProperties = o;