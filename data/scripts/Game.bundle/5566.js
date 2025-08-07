Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./6.js");
var l = require("./148.js");
var c = require("./30.js");
var u = require("./54.js");
var d = require("./119.js");
var p = require("./4.js");
var h = function (e) {
  function CastleOtherPlayerData() {
    var t = e.call(this) || this;
    o.BasicController.getInstance().addEventListener(a.CountryInstanceMappingEvent.PROCESS_COMPLETE, t.bindFunction(t.onNewLanguage));
    t._ownOwnerInfo = new C.OwnWorldMapOwnerInfoVO();
    t.resetOwnerInfo();
    return t;
  }
  n.__extends(CastleOtherPlayerData, e);
  CastleOtherPlayerData.prototype.reset = function () {
    this.resetOwnerInfo();
    this._ownOwnerInfo = new C.OwnWorldMapOwnerInfoVO();
  };
  CastleOtherPlayerData.prototype.resetOwnerInfo = function () {
    this._ownerInfo = new Map();
    g.CastleNPCOwnerFactory.generateStandardNPCOwner().forEach(this.bindFunction(this.addToOwnerList));
  };
  CastleOtherPlayerData.prototype.addToOwnerList = function (e, t, i) {
    this.addOwnerInfo(e);
  };
  CastleOtherPlayerData.prototype.addOwnerInfo = function (e) {
    this._ownerInfo.set(e.playerID, e);
  };
  CastleOtherPlayerData.prototype.addDummyPlayer = function (e) {
    var t = _.WorldMapOwnerInfoVO.createDummy(e);
    this.addOwnerInfo(t);
  };
  CastleOtherPlayerData.prototype.getOwnInfoVO = function () {
    return this._ownOwnerInfo;
  };
  CastleOtherPlayerData.prototype.getOwnerInfoVO = function (e) {
    var t;
    if (e == p.CastleModel.userData.playerID || e == l.ClientConstNPCs.NPC_ID_DAIMYO_TOWNSHIP) {
      t = this.getOwnInfoVO();
    } else if (!(t = this._ownerInfo.get(e))) {
      if (d.PlayerHelper.isNPCPlayer(e)) {
        t = g.CastleNPCOwnerFactory.getOwner(e);
      }
      if (t) {
        this.addOwnerInfo(t);
      }
    }
    return t;
  };
  CastleOtherPlayerData.prototype.parseOwnerInfo = function (e, t = -1) {
    if (!e || !e.OID) {
      return null;
    }
    if (t == -1) {
      t = c.CachedTimer.getCachedTimer();
    }
    var i = r.int(e.OID);
    if (d.PlayerHelper.isNPCPlayer(i)) {
      return this.getOwnerInfoVO(i);
    }
    if (e.DUM) {
      if (!this._ownerInfo.get(i)) {
        this.addDummyPlayer(i);
      }
      return this._ownerInfo.get(i);
    }
    if (this._ownOwnerInfo && i == this._ownOwnerInfo.playerID) {
      p.CastleModel.userData.allianceRank = parseInt(e.AR);
      return this._ownOwnerInfo;
    }
    if (this._ownerInfo.get(i)) {
      this._ownerInfo.get(i).fillFromParamObject(e, t);
      return this._ownerInfo.get(i);
    }
    var n = new _.WorldMapOwnerInfoVO();
    n.fillFromParamObject(e, t);
    this.addOwnerInfo(n);
    return n;
  };
  CastleOtherPlayerData.prototype.parseOwnerInfoArray = function (e) {
    if (e && e.length > 0) {
      var t = c.CachedTimer.getCachedTimer();
      if (e != null) {
        for (var i = 0, n = e; i < n.length; i++) {
          var o = n[i];
          if (o !== undefined) {
            this.parseOwnerInfo(o, t);
          }
        }
      }
    }
  };
  CastleOtherPlayerData.prototype.onNewLanguage = function (e) {
    this.resetOwnerInfo();
  };
  return CastleOtherPlayerData;
}(u.CastleBasicData);
exports.CastleOtherPlayerData = h;
var g = require("./387.js");
var C = require("./5567.js");
var _ = require("./316.js");
s.classImplementsInterfaces(h, "IUpdatable");