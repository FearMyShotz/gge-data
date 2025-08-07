Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./54.js");
var r = require("./345.js");
var l = require("./4.js");
var c = function (e) {
  function CastlePermanentCastleData() {
    var t = this;
    t._castles = new Map();
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastlePermanentCastleData, e);
  CastlePermanentCastleData.prototype.parseGPC = function (e) {
    if (e) {
      var t;
      var i;
      for (var n = e.A, o = 0, s = 0, r = 0; r < n.length; ++r) {
        i = n[r];
        o = a.int(i.AID);
        s = a.int(i.KID);
        t = this.getDicKey(o, s);
        if (!this._castles.get(t)) {
          this._castles.set(t, new u.CastlePermanentCastleVO());
        }
        this._castles.get(t).parseParamObject(i);
      }
    }
  };
  CastlePermanentCastleData.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    if (this._castles != null) {
      for (var t = 0, i = Array.from(this._castles.values()); t < i.length; t++) {
        i[t].destroy();
      }
    }
    this._castles = new Map();
  };
  CastlePermanentCastleData.prototype.getUnitBaseLocation = function (e) {
    var t;
    switch (e.unitBaseLocation) {
      case r.UnitBaseLocationEnum.HOME_CASTLE:
        t = l.CastleModel.userData.castleList.getHomeCastle();
        break;
      case r.UnitBaseLocationEnum.KINGDOM_CASTLE:
        t = l.CastleModel.userData.castleList.getMainCastleByKingdomID(e.kingdomID);
        break;
      case r.UnitBaseLocationEnum.CONTROLLER:
        t = e.isUnderConquerControl ? l.CastleModel.userData.castleList.getMainCastleByKingdomID(e.kingdomID) : e;
    }
    return this._castles.get(this.getDicKey(t.objectId, t.kingdomID));
  };
  CastlePermanentCastleData.prototype.getCurrentCastle = function () {
    var e = l.CastleModel.areaData.activeArea ? l.CastleModel.areaData.activeAreaInfo : null;
    if (e) {
      return this._castles.get(this.getDicKey(e.objectId, e.kingdomID));
    } else {
      return null;
    }
  };
  CastlePermanentCastleData.prototype.getCastleByWorldAreaId = function (e, t) {
    return this._castles.get(this.getDicKey(e, t));
  };
  CastlePermanentCastleData.prototype.getCastleByAreaInfo = function (e) {
    return this._castles.get(this.getDicKey(e.objectId, e.kingdomID));
  };
  CastlePermanentCastleData.prototype.getDicKey = function (e, t) {
    return t + "-" + e;
  };
  return CastlePermanentCastleData;
}(s.CastleBasicData);
exports.CastlePermanentCastleData = c;
var u = require("./5567.js");
o.classImplementsInterfaces(c, "IUpdatable");