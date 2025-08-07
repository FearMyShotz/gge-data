Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./4.js");
var c = require("./468.js");
var u = function (e) {
  function MultiEventRewardsProperties(t) {
    var i = e.call(this) || this;
    i._events = [];
    i.parseMessage(t);
    return i;
  }
  n.__extends(MultiEventRewardsProperties, e);
  MultiEventRewardsProperties.prototype.parseMessage = function (e) {
    var t;
    var i;
    var n;
    var o;
    var a = [];
    var s = new Map();
    var l = 0;
    var c = 0;
    var u = 0;
    var d = 0;
    var p = 0;
    var h = 0;
    var g = false;
    if (e != null) {
      for (var f = 0, O = e; f < O.length; f++) {
        var E = O[f];
        if (E !== undefined && (l = r.int(C.CastlePopUpHelper.getEventIDbyPopUpID(E.POP))) != -1) {
          c = -1;
          p = -1;
          if (n = s.get(l)) {
            c = n.ownRank;
            p = n.topXCount;
          }
          o = this.getLongTermPointEventSkin(E);
          g = C.CastlePopUpHelper.isWinner(E.POP);
          d = r.int(this.getPoints(E.VAL));
          c = c < (u = r.int(this.getRank(E.VAL))) ? u : c;
          if (p > (h = r.int(this.getTopX(E.VAL))) && h != -1 || p == -1) {
            p = h;
          }
          i = this.getRewardList(E.VAL);
          if (s.get(l)) {
            (n = s.get(l)).rewardList.addList(i);
            n.ownPoints = d;
            n.ownRank = c;
            n.topXCount = r.int(n.topXCount != 1 ? g ? 1 : p : n.topXCount);
          } else {
            n = new m(i, o, d, c, g ? 1 : p);
            s.set(l, n);
          }
        }
      }
    }
    if (s != null) {
      for (var y = 0, b = Array.from(s.keys()); y < b.length; y++) {
        var D = b[y];
        if (D !== undefined) {
          n = s.get(D);
          l = parseInt(D);
          if (n.rewardList.length != 0) {
            t = new _.MultiEventRewardEventInfoVO(l, n.rewardList, n.ownRank, n.ownPoints, n.topXCount, n.skin);
            a.push(t);
          }
        }
      }
    }
    this._events = a;
  };
  MultiEventRewardsProperties.prototype.getTopX = function (e) {
    if (e != undefined && isNaN(Number(e)) && e.hasOwnProperty("TX")) {
      return r.int(e.TX ? e.TX : -1);
    } else {
      return -1;
    }
  };
  MultiEventRewardsProperties.prototype.getLongTermPointEventSkin = function (e) {
    var t;
    if (isNaN(e.VAL) && e.VAL && e.VAL.hasOwnProperty("SID")) {
      t = c.LongTermPointEventSkin.getTypeById(e.VAL.SID);
    }
    return t;
  };
  MultiEventRewardsProperties.prototype.getPoints = function (e) {
    var t = 0;
    if (e) {
      if (isNaN(Number(e))) {
        if (e.hasOwnProperty("OP")) {
          t = parseInt(e.OP);
        } else if (e.hasOwnProperty("P")) {
          t = e.hasOwnProperty("WID") ? r.int(s.ColossusConst.getDecoPoints(r.int(e.P))) : parseInt(e.P);
        }
      } else {
        t = -1;
      }
    }
    return t;
  };
  MultiEventRewardsProperties.prototype.getRewardList = function (e) {
    var t;
    if (isNaN(Number(e))) {
      if (e != undefined && e.hasOwnProperty("WID")) {
        t = new h.CollectableList();
        var i = new g.CollectableItemBuildingVO(e.WID);
        i.buildingVO.customDecoPoints = r.int(s.ColossusConst.getDecoPoints(r.int(e.P)));
        t.addItem(i);
      } else if (e == undefined || isNaN(Number(e.R))) {
        if (e != undefined) {
          t = C.CastlePopUpHelper.createRewardList(e);
        }
      } else {
        t = d.CollectableManager.parser.s2cParamList.createList(e.R);
      }
    } else {
      t = l.CastleModel.rewardData.getListById(parseInt(e.toString()));
    }
    t ||= new h.CollectableList();
    this.removeBuildingDurationForBuildings(t);
    if (e != undefined && isNaN(e) && e.hasOwnProperty("GT")) {
      this.setGrantType(t, e.GT);
    }
    return t;
  };
  MultiEventRewardsProperties.prototype.setGrantType = function (e, t) {
    for (var i = r.int(e.list.length), n = 0; n < i; n++) {
      e.list[n].grantType = t;
    }
  };
  MultiEventRewardsProperties.prototype.removeBuildingDurationForBuildings = function (e) {
    var t = e.getIndicesByType(p.CollectableEnum.BUILDING);
    for (var i = r.int(t.length), n = 0; n < i; n++) {
      e.getItemByIndex(t[n]);
    }
  };
  MultiEventRewardsProperties.prototype.getRank = function (e) {
    var t = -1;
    if (isNaN(Number(e))) {
      if (e && e.hasOwnProperty("OR")) {
        t = r.int(e.OR);
      } else if (e && e.hasOwnProperty("R") && !a.instanceOfClass(e.R, "Array")) {
        t = r.int(e.R);
      }
    } else {
      t = parseInt(e.toString());
    }
    return t;
  };
  Object.defineProperty(MultiEventRewardsProperties.prototype, "events", {
    get: function () {
      return this._events;
    },
    enumerable: true,
    configurable: true
  });
  return MultiEventRewardsProperties;
}(o.BasicProperties);
exports.MultiEventRewardsProperties = u;
var d = require("./50.js");
var p = require("./12.js");
var h = require("./48.js");
var g = require("./291.js");
var C = require("./405.js");
var _ = require("./3476.js");
var m = function () {
  function TempVO(e, t, i, n, o) {
    this._ownPoints = -1;
    this._ownRank = -1;
    this._topXCount = -1;
    this._rewardList = e;
    this._skin = t;
    this._ownPoints = i;
    this._ownRank = n;
    this._topXCount = o;
  }
  Object.defineProperty(TempVO.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempVO.prototype, "skin", {
    get: function () {
      return this._skin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempVO.prototype, "ownPoints", {
    get: function () {
      return this._ownPoints;
    },
    set: function (e) {
      this._ownPoints = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempVO.prototype, "ownRank", {
    get: function () {
      return this._ownRank;
    },
    set: function (e) {
      this._ownRank = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempVO.prototype, "topXCount", {
    get: function () {
      return this._topXCount;
    },
    set: function (e) {
      this._topXCount = e;
    },
    enumerable: true,
    configurable: true
  });
  return TempVO;
}();