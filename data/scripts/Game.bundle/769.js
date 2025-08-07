Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleResearchDialogProperties(t, i) {
    var n = e.call(this) || this;
    n._researchVOToDisplay = t;
    n._recentlyFinishedResearchVO = i;
    return n;
  }
  n.__extends(CastleResearchDialogProperties, e);
  Object.defineProperty(CastleResearchDialogProperties.prototype, "researchVOToDisplay", {
    get: function () {
      return this._researchVOToDisplay;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResearchDialogProperties.prototype, "recentlyFinishedResearchVO", {
    get: function () {
      return this._recentlyFinishedResearchVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleResearchDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleResearchDialogProperties = o;