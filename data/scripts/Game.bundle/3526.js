Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleGenericRewardsDialogProperties(t, i, n = -1, o = null) {
    var a = e.call(this) || this;
    a._txtTitle = t;
    a._txtCopy = i;
    a._rewardID = n;
    a._rewards = o;
    return a;
  }
  n.__extends(CastleGenericRewardsDialogProperties, e);
  Object.defineProperty(CastleGenericRewardsDialogProperties.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardsDialogProperties.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardsDialogProperties.prototype, "txtTitle", {
    get: function () {
      return this._txtTitle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardsDialogProperties.prototype, "txtCopy", {
    get: function () {
      return this._txtCopy;
    },
    enumerable: true,
    configurable: true
  });
  return CastleGenericRewardsDialogProperties;
}(require("./220.js").BasicProperties);
exports.CastleGenericRewardsDialogProperties = o;