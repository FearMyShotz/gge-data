Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./4.js");
var l = function (e) {
  function AGlobalLeaderBoardItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(AGlobalLeaderBoardItem, e);
  AGlobalLeaderBoardItem.prototype.updateWithData = function (e, t) {
    this._data = e;
    this._searchScoreID = t;
    this.update();
  };
  AGlobalLeaderBoardItem.prototype.updateWithRank = function (e) {
    this._data = this.createRankOnlyData(e);
    this._searchScoreID = "";
    this.update();
  };
  AGlobalLeaderBoardItem.prototype.updateWithUnknown = function () {
    this._data = {};
    this._searchScoreID = "";
    this.update();
  };
  AGlobalLeaderBoardItem.prototype.updateWithNull = function () {
    this._data = null;
    this.update();
  };
  AGlobalLeaderBoardItem.prototype.update = function () {};
  AGlobalLeaderBoardItem.prototype.createRankOnlyData = function (e) {
    return {
      R: e
    };
  };
  Object.defineProperty(AGlobalLeaderBoardItem.prototype, "rank", {
    get: function () {
      if (this._data) {
        return this._data.R;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGlobalLeaderBoardItem.prototype, "rankText", {
    get: function () {
      if (this.rank > -1) {
        return s.Localize.number(this.rank);
      } else {
        return "???";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGlobalLeaderBoardItem.prototype, "playerName", {
    get: function () {
      if (this._data && this._data.P) {
        return this._data.P;
      } else {
        return "???";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGlobalLeaderBoardItem.prototype, "allianceName", {
    get: function () {
      if (this._data) {
        return this._data.A || "-";
      } else {
        return "???";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGlobalLeaderBoardItem.prototype, "instanceId", {
    get: function () {
      if (this._data) {
        return this._data.I;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGlobalLeaderBoardItem.prototype, "points", {
    get: function () {
      if (this._data && this._data.S) {
        return s.Localize.number(this._data.S);
      } else {
        return "???";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGlobalLeaderBoardItem.prototype, "scoreID", {
    get: function () {
      if (this._data && this._data.SI) {
        return this._data.SI;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGlobalLeaderBoardItem.prototype, "serverName", {
    get: function () {
      var e = this;
      var t = o.BasicModel.instanceProxy.instanceMap;
      if (!AGlobalLeaderBoardItem.LOCA_ID_COUNT_MAP) {
        AGlobalLeaderBoardItem.LOCA_ID_COUNT_MAP = new Map();
        t.forEach(function (e) {
          return AGlobalLeaderBoardItem.LOCA_ID_COUNT_MAP.set(e.instanceLocaId, (AGlobalLeaderBoardItem.LOCA_ID_COUNT_MAP.get(e.instanceLocaId) || 0) + 1);
        });
      }
      var i;
      var n = o.BasicModel.instanceProxy.instanceMap.find(function (t) {
        return t.instanceId == e.instanceId;
      });
      if (n) {
        i = s.Localize.text(n.instanceLocaId);
        if (AGlobalLeaderBoardItem.LOCA_ID_COUNT_MAP.get(n.instanceLocaId) > 1) {
          i = i + ": " + n.instanceCountID;
        }
      } else {
        i = "???";
      }
      return i;
    },
    enumerable: true,
    configurable: true
  });
  AGlobalLeaderBoardItem.prototype.isOwnPlayer = function () {
    return this.playerName == r.CastleModel.userData.userName && this.instanceId == r.CastleModel.instanceProxy.selectedInstanceVO.instanceId;
  };
  return AGlobalLeaderBoardItem;
}(require("./40.js").CastleItemRenderer);
exports.AGlobalLeaderBoardItem = l;
a.classImplementsInterfaces(l, "ICollectableRendererList");