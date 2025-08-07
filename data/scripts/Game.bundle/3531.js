Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./4.js");
var s = function (e) {
  function CastleStormIslandsEventEndDialogProperties(t, i, n = -1, o = -1, s = 0, r = -1, l = -1, c = false) {
    var u = e.call(this) || this;
    if (t) {
      u._allianceRewards = a.CastleModel.rewardData.getListByIdArray(t);
    }
    if (i) {
      u._playerRewards = a.CastleModel.rewardData.getListByIdArray(i);
    }
    u._playerRank = n;
    u._allianceRank = o;
    u._playerPoints = s;
    u._alliancePoints = r;
    u._isAlliance = c;
    u._titleVO = l != -1 ? a.CastleModel.titleData.getTitleByTitleID(l) : null;
    return u;
  }
  n.__extends(CastleStormIslandsEventEndDialogProperties, e);
  Object.defineProperty(CastleStormIslandsEventEndDialogProperties.prototype, "isAlliance", {
    get: function () {
      return this._isAlliance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsEventEndDialogProperties.prototype, "allianceRewards", {
    get: function () {
      return this._allianceRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsEventEndDialogProperties.prototype, "playerRewards", {
    get: function () {
      return this._playerRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsEventEndDialogProperties.prototype, "playerRank", {
    get: function () {
      return this._playerRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsEventEndDialogProperties.prototype, "allianceRank", {
    get: function () {
      return this._allianceRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsEventEndDialogProperties.prototype, "playerPoints", {
    get: function () {
      return this._playerPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsEventEndDialogProperties.prototype, "alliancePoints", {
    get: function () {
      return this._alliancePoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsEventEndDialogProperties.prototype, "titleVO", {
    get: function () {
      return this._titleVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleStormIslandsEventEndDialogProperties;
}(o.BasicProperties);
exports.CastleStormIslandsEventEndDialogProperties = s;