Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleEilandTitleErrorProperties(t, i) {
    var n = e.call(this) || this;
    CastleEilandTitleErrorProperties._titleTextID = t;
    CastleEilandTitleErrorProperties._descTextID = i;
    return n;
  }
  n.__extends(CastleEilandTitleErrorProperties, e);
  Object.defineProperty(CastleEilandTitleErrorProperties.prototype, "titleTextID", {
    get: function () {
      return CastleEilandTitleErrorProperties._titleTextID;
    },
    set: function (e) {
      CastleEilandTitleErrorProperties._titleTextID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandTitleErrorProperties.prototype, "descTextID", {
    get: function () {
      return CastleEilandTitleErrorProperties._descTextID;
    },
    set: function (e) {
      CastleEilandTitleErrorProperties._descTextID = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEilandTitleErrorProperties;
}(require("./2.js").BasicProperties);
exports.CastleEilandTitleErrorProperties = o;