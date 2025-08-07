Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./55.js");
var c = require("./84.js");
var u = require("./4.js");
var d = function () {
  function IsoHelperData() {}
  IsoHelperData.prototype.createIsoObjectVOByXml = function (e, t = null, i = true) {
    var n = u.CastleModel.wodData.createVObyWOD(e, p.CastleWodData.TYPE_BUILDING) || u.CastleModel.wodData.createVObyWOD(e, p.CastleWodData.TYPE_RUBY_WISHING_WELL);
    if (n) {
      n.init(t || g.Iso.data);
      if (i) {
        n.updateData();
      }
    }
    return n;
  };
  IsoHelperData.prototype.createIsoObjectVOByServer = function (e, t = null, i = true) {
    var a = e.O ? e.O : e;
    var s = r.int(a.shift());
    var l = o.castAs(u.CastleModel.wodData.createVObyWOD(s, p.CastleWodData.TYPE_BUILDING), "AIsoObjectVO");
    if (l) {
      l.init(t || g.Iso.data);
      l.parseServerObject(a);
      if (i) {
        l.updateData();
      }
      return l;
    } else {
      n.debug("--- IsoHelperData.createIsoObjectVOByServer(): " + s + "was not found in wodData.");
      return null;
    }
  };
  IsoHelperData.prototype.createIsoObjectVOByType = function (e, t = null, i = true) {
    var n = new e.dataClass();
    n.init(t);
    if (i) {
      n.updateData();
    }
    return n;
  };
  IsoHelperData.prototype.createObjectGroupDic = function (e) {
    var t = new Map();
    for (var i = 0, n = c.CastleEnum.getEnumListByClass(h.IsoObjectGroupEnum); i < n.length; i++) {
      var o = n[i];
      if (a.instanceOfClass(o, "IsoObjectGroupEnum")) {
        var s = o;
        var r = e ? s.viewClass : s.dataClass;
        if (!r) {
          continue;
        }
        t.set(s, new r());
        t.get(s).groupType = s;
      }
    }
    return t;
  };
  IsoHelperData.prototype.cloneIsoObject = function (e) {
    if (!e) {
      return null;
    }
    var t = this.createIsoObjectVOByXml(e.wodId, e.isoData, true);
    t.cloneFrom(e);
    return t;
  };
  IsoHelperData.prototype.updateIsoObjectByServer = function (e, t) {
    var i = t;
    var n = r.int(i.shift());
    var o = r.int(e.wodId);
    if (o >= 0 && o != n) {
      var a = u.CastleModel.wodData.wodXmlElements.get(p.CastleWodData.TYPE_BUILDING).get(n);
      if (a) {
        e.parseXmlNode(a);
      }
    }
    e.parseServerObject(i);
    e.updateData();
    e.dispatchValueObjectChanged();
  };
  IsoHelperData.prototype.destroyAndCreateNewVOList = function (e) {
    if (e) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && "destroy" in n) {
          n.destroy();
        }
      }
    }
    if (a.instanceOfClass(e, "Array")) {
      return [];
    } else {
      return new (l.ClientConstUtils.getClassFromObject(e))();
    }
  };
  IsoHelperData.prototype.getAreaKingdomName = function (e, t = -1) {
    if (t == s.WorldConst.AREA_TYPE_TREASURE_CAMP) {
      return u.CastleModel.specialEventData.activeSeasonVO.eventType;
    } else {
      return u.CastleModel.kingdomData.getKingdomVOByID(e).kingdomName;
    }
  };
  IsoHelperData.prototype.getBackgroundType = function (e) {
    if (e.areaData.areaInfo.areaType == s.WorldConst.AREA_TYPE_TREASURE_CAMP) {
      return "Season" + u.CastleModel.specialEventData.activeSeasonVO.eventId;
    } else {
      return u.CastleModel.kingdomData.getKingdomVOByID(e.areaData.areaInfo.kingdomID).kingdomName;
    }
  };
  IsoHelperData.prototype.getMovementWaypointClasses = function (e) {
    return new e.dataClass().getWaypoints();
  };
  return IsoHelperData;
}();
exports.IsoHelperData = d;
var p = require("./56.js");
var h = require("./143.js");
var g = require("./34.js");