Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleKoreanData() {
    var t = this;
    t._koreaHoursPlayed = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleKoreanData, e);
  Object.defineProperty(CastleKoreanData.prototype, "koreaHoursPlayed", {
    get: function () {
      return this._koreaHoursPlayed;
    },
    set: function (e) {
      this._koreaHoursPlayed = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleKoreanData;
}(require("./54.js").CastleBasicData);
exports.CastleKoreanData = a;
o.classImplementsInterfaces(a, "IUpdatable");