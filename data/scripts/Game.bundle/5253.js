Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function IsoDataObjectsProvider(e) {
    this._objects = e;
  }
  IsoDataObjectsProvider.prototype.getObjectsByListType = function (e = null) {
    if (e) {
      var t = [];
      var i = this.objects.getGroupByType(e);
      if (i) {
        if (s.instanceOfClass(i, "AIsoDataObjectGroupSimpleList")) {
          t = i.list;
        } else {
          i.fillInCompleteList(t);
        }
        return t;
      } else {
        return t;
      }
    }
    return this.objects.getCompleteObjectsList();
  };
  IsoDataObjectsProvider.prototype.getObjectsByListTypes = function (e = null) {
    if (e) {
      var t = [];
      if (e != null) {
        for (var i = 0, n = e; i < n.length; i++) {
          var o = n[i];
          if (o !== undefined) {
            var a = this.objects.getGroupByType(o);
            if (!a) {
              return t;
            }
            a.fillInCompleteList(t);
          }
        }
      }
      return t;
    }
    return this.objects.getCompleteObjectsList();
  };
  IsoDataObjectsProvider.prototype.getObjectById = function (e) {
    for (var t = 0, i = this.objects.getCompleteObjectsList(); t < i.length; t++) {
      var n = i[t];
      if (n.objectId == e) {
        return n;
      }
    }
    return null;
  };
  IsoDataObjectsProvider.prototype.getObjectAmountByType = function (e, t = null) {
    var i = 0;
    for (var n = 0, o = this.getObjectsByListType(t); n < o.length; n++) {
      if (o[n].objectType == e) {
        i++;
      }
    }
    return i;
  };
  IsoDataObjectsProvider.prototype.getObjectAmountByWodID = function (e) {
    var t = 0;
    this._objects.getCompleteObjectsList().forEach(function (i) {
      if (i.wodId == e) {
        t++;
      }
    });
    return t;
  };
  IsoDataObjectsProvider.prototype.getObjectByType = function (e, t = -1, i = null) {
    for (var n = 0, a = this.getObjectsByListType(i); n < a.length; n++) {
      var s = a[n];
      if (s && s.objectType == e) {
        if (!(t > 0)) {
          return s;
        }
        var r = o.castAs(s, "AShopVO");
        if (r && r.level == t) {
          return s;
        }
      }
    }
    return null;
  };
  IsoDataObjectsProvider.prototype.getObjectsByType = function (e, t = -1, i = null) {
    var n = [];
    for (var a = 0, s = this.getObjectsByListType(i); a < s.length; a++) {
      var r = s[a];
      if (r && r.objectType == e) {
        if (t > 0) {
          var l = o.castAs(r, "AShopVO");
          if (l && l.level == t) {
            n.push(r);
          }
        } else {
          n.push(r);
        }
      }
    }
    return n;
  };
  IsoDataObjectsProvider.prototype.getFunctionalBuildingByType = function (e) {
    for (var t = 0, i = this.getObjectsByType(e); t < i.length; t++) {
      var n = i[t];
      if (n && n.buildingState.isFunctionally) {
        return n;
      }
    }
    return null;
  };
  IsoDataObjectsProvider.prototype.hasFunctionalBuildingByType = function (e) {
    return this.getFunctionalBuildingByType(e) != null;
  };
  IsoDataObjectsProvider.prototype.getObjectByClass = function (e, t = null) {
    for (var i = 0, n = this.getObjectsByListType(t); i < n.length; i++) {
      var o = n[i];
      if (s.instanceOfClass(o, a.getQualifiedClassName(e))) {
        return o;
      }
    }
    return null;
  };
  IsoDataObjectsProvider.prototype.getObjectByClasses = function (e, t = null) {
    for (var i = 0, n = this.getObjectsByListType(t); i < n.length; i++) {
      var o = n[i];
      for (var a = 0; a < e.length; a++) {
        if (s.instanceOfClass(o, "classList[j]")) {
          return o;
        }
      }
    }
    return null;
  };
  IsoDataObjectsProvider.prototype.getObjectsByClass = function (e, t = null) {
    var i = [];
    for (var n = 0, o = this.getObjectsByListType(t); n < o.length; n++) {
      var r = o[n];
      if (s.instanceOfClass(r, a.getQualifiedClassName(e))) {
        i.push(r);
      }
    }
    return i;
  };
  IsoDataObjectsProvider.prototype.getObjectsByClasses = function (e, t = null) {
    if (e.length <= 0) {
      return [];
    }
    var i = [];
    for (var n = 0, o = this.getObjectsByListType(t); n < o.length; n++) {
      var a = o[n];
      if (l.ClientConstUtils.isObjectClassOf(a, e)) {
        i.push(a);
      }
    }
    return i;
  };
  IsoDataObjectsProvider.prototype.hasMaxAmountOfObjectsByType = function (e) {
    if (!s.instanceOfClass(e, "ABasicBuildingVO") || s.instanceOfClass(e, "CastlewallDefenceVO") || s.instanceOfClass(e, "BasicMoatVO")) {
      return false;
    }
    var t = r.int(e.maximumCount);
    return (e instanceof c.DecoBuildingVO ? r.int(this.getObjectAmountByWodID(e.wodId)) : r.int(this.getObjectAmountByType(e.objectType))) >= t;
  };
  IsoDataObjectsProvider.prototype.hasUpgradeableBuilding = function () {
    for (var e = 0, t = this.getObjectsByListType(); e < t.length; e++) {
      var i = t[e];
      if (i && i.upgradeAvailable) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(IsoDataObjectsProvider.prototype, "objects", {
    get: function () {
      return this._objects;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDataObjectsProvider;
}();
exports.IsoDataObjectsProvider = n;
var o = require("./1.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./6.js");
var l = require("./55.js");
var c = require("./783.js");