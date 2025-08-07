Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./436.js");
var o = function () {
  function CastleDetailedVillageList() {
    this._villageList = [];
    this._privateVillageList = [];
  }
  CastleDetailedVillageList.prototype.parseKGV = function (e) {
    if (e) {
      this._villageList = [];
      this._privateVillageList = [];
      for (var t = 0, i = e.VI; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = new a.CastleKingdomVillageInfoVO();
          o.parseParamObject(n);
          o.villageMapObjectVO.ownerInfo = p.CastleModel.otherPlayerData.getOwnInfoVO();
          this._villageList.push(o);
        }
      }
      if (e.PV) {
        for (var r = 0, c = e[l.CommKeys.PRIVATE_RESOURCE_VILLAGES]; r < c.length; r++) {
          var u = c[r];
          if (u !== undefined) {
            var d = p.CastleModel.privateResourceVillageData.getVillageByID(u[l.CommKeys.XML_VILLAGE_ID]);
            if (d) {
              var g = new h.PrivateResourceVillageVO(u[l.CommKeys.VILLAGE_ID], d);
              this._privateVillageList.push(g);
            }
          }
        }
      }
      this.controller.dispatchEvent(new s.CastleUserDataEvent(s.CastleUserDataEvent.CHANGE_VILLAGELIST));
    }
  };
  CastleDetailedVillageList.prototype.getSortedVillageListByKingdomID = function (e) {
    if (e == -1) {
      return this.completeList;
    }
    var t = [];
    if (this._villageList != null) {
      for (var i = 0, n = this._villageList; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.villageMapObjectVO.kingdomID == e) {
          t.push(o);
        }
      }
    }
    t.sort(this.bindFunction(this.sortByAreaID));
    return t;
  };
  CastleDetailedVillageList.prototype.sortByAreaID = function (e, t) {
    if (e.villageMapObjectVO.objectId > t.villageMapObjectVO.objectId) {
      return 1;
    } else if (e.villageMapObjectVO.objectId < t.villageMapObjectVO.objectId) {
      return -1;
    } else {
      return 0;
    }
  };
  CastleDetailedVillageList.prototype.getAmountInKingdomID = function (e) {
    var t = 0;
    if (this._villageList != null) {
      for (var i = 0, n = this._villageList; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.villageMapObjectVO.kingdomID == e) {
          t++;
        }
      }
    }
    return t;
  };
  Object.defineProperty(CastleDetailedVillageList.prototype, "completeList", {
    get: function () {
      return this._villageList;
    },
    enumerable: true,
    configurable: true
  });
  CastleDetailedVillageList.prototype.getBonusStringByKingdomID = function (e, t) {
    var i = p.CastleModel.kingdomData.getKingdomVOByID(e).villagesInfo;
    if (!i) {
      return "0 %";
    }
    var n = u.int(this.getPublicVillageCountByRessourceType(e, t) * i["productivity" + t + "Boost"]);
    var o = u.int(this.getPrivateVillagesStrength(e, t));
    return c.Localize.text("value_percentage", [n + o]);
  };
  CastleDetailedVillageList.prototype.getPrivateVillagesStrength = function (e, t) {
    var i = 0;
    if (this._privateVillageList != null) {
      for (var n = 0, o = this._privateVillageList; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.villageInfo.kingdomID == e && a.villageInfo.typeString == t) {
          i += u.int(a.villageInfo.bonus.strength);
        }
      }
    }
    return i;
  };
  CastleDetailedVillageList.prototype.getPublicVillageCountByRessourceType = function (e, t) {
    if (!p.CastleModel.kingdomData.getKingdomVOByID(e).villagesInfo) {
      return 0;
    }
    var i = 0;
    if (this._villageList != null) {
      for (var n = 0, o = this._villageList; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.villageMapObjectVO.kingdomID == e && a.villageMapObjectVO.typeName == t) {
          i++;
        }
      }
    }
    return i;
  };
  CastleDetailedVillageList.prototype.getCountByRessourceType = function (e, t) {
    if (!p.CastleModel.kingdomData.getKingdomVOByID(e).villagesInfo) {
      return 0;
    }
    var i = 0;
    if (this._villageList != null) {
      for (var o = 0, a = this._villageList; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined && s.villageMapObjectVO.kingdomID == e && s.villageMapObjectVO.typeName == t) {
          i++;
        }
      }
    }
    if (this._privateVillageList != null) {
      for (var r = 0, l = this._privateVillageList; r < l.length; r++) {
        var c = l[r];
        if (c !== undefined && c.villageInfo.kingdomID == e && n.ClientConstKingdom.getVillageTypeName(c.villageInfo.type) == t) {
          i++;
        }
      }
    }
    return i;
  };
  CastleDetailedVillageList.prototype.getCountByResourceTypeIncludingCurrentConquerMovements = function (e, t) {
    var i = u.int(this.getCountByRessourceType(e, t));
    var n = p.CastleModel.armyData.getAllMyMovementsByTargetType(l.WorldConst.AREA_TYPE_VILLAGE, e);
    if (n != null) {
      for (var o = 0, a = n; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined && s.targetArea.typeName == t && r.instanceOfClass(s, "ArmyAttackMapmovementVO")) {
          i++;
        }
      }
    }
    return i;
  };
  CastleDetailedVillageList.prototype.getCountByKingdomID = function (e) {
    if (!p.CastleModel.kingdomData.getKingdomVOByID(e).villagesInfo) {
      return 0;
    }
    var t = 0;
    if (this._villageList != null) {
      for (var i = 0, n = this._villageList; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.villageMapObjectVO.kingdomID == e) {
          t++;
        }
      }
    }
    return t;
  };
  CastleDetailedVillageList.prototype.getVillageByID = function (e, t) {
    if (this._villageList != null) {
      for (var i = 0, n = this._villageList; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.villageMapObjectVO.objectId === e && o.villageMapObjectVO.kingdomID == t) {
          return o.villageMapObjectVO;
        }
      }
    }
    return null;
  };
  CastleDetailedVillageList.prototype.getPrivateVillageList = function (e, t) {
    var i = [];
    if (this._privateVillageList != null) {
      for (var n = 0, o = this._privateVillageList; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.villageInfo.kingdomID == e && a.villageInfo.type == t) {
          i.push(a);
        }
      }
    }
    i.sort(this.bindFunction(this.sortByLevel));
    return i;
  };
  CastleDetailedVillageList.prototype.sortByLevel = function (e, t) {
    return u.int(t.villageInfo.villageLevel - e.villageInfo.villageLevel);
  };
  Object.defineProperty(CastleDetailedVillageList.prototype, "controller", {
    get: function () {
      return d.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleDetailedVillageList;
}();
exports.CastleDetailedVillageList = o;
var a = require("./2310.js");
var s = require("./32.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./15.js");
var p = require("./4.js");
var h = require("./2311.js");