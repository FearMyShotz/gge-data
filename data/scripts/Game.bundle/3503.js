Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = function (e) {
  function CastleFactionRewardDialogProperties(t, i, n = false, a = false, s = false) {
    var r = this;
    r._faction = 0;
    r._isAlliance = false;
    r._isFactionInvasion = false;
    CONSTRUCTOR_HACK;
    (r = e.call(this, t, i, n) || this)._faction = o.int(i.FID);
    r._isFactionInvasion = a;
    r._isAlliance = s;
    return r;
  }
  n.__extends(CastleFactionRewardDialogProperties, e);
  Object.defineProperty(CastleFactionRewardDialogProperties.prototype, "faction", {
    get: function () {
      return this._faction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionRewardDialogProperties.prototype, "isAlliance", {
    get: function () {
      return this._isAlliance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionRewardDialogProperties.prototype, "isFactionInvasion", {
    get: function () {
      return this._isFactionInvasion;
    },
    enumerable: true,
    configurable: true
  });
  return CastleFactionRewardDialogProperties;
}(require("./1684.js").CastleGenericRewardDialogProperties);
exports.CastleFactionRewardDialogProperties = a;