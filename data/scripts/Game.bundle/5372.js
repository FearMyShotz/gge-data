Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./123.js");
var s = require("./370.js");
var r = require("./15.js");
var l = require("./72.js");
var c = require("./5373.js");
var u = function (e) {
  function CastleEventPackageData() {
    var t = this;
    t._packagePrice = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleEventPackageData, e);
  CastleEventPackageData.prototype.parseXml = function (e) {
    this._filterRelations = new Map();
    var t = e.packageCategoryFilterRelations;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var s = new c.EventPackageCategoryFilterRelationVO();
          s.fillFromParamXML(o);
          this._filterRelations.set(s.relationID, s);
        }
      }
    }
    this._packageVos = new Map();
    var r = e.packages;
    var l = [];
    if (r != null) {
      for (var u = 0, p = r; u < p.length; u++) {
        var h;
        var g = p[u];
        if (g !== undefined) {
          (h = new d.EventPackageVO()).fillFromParamXML(g);
          this._packageVos.set(h.packageID, h);
          if (h.packageType == a.ClientConstPackages.PACKAGE_TYPE_BUNDLE) {
            l.push([h, g]);
          }
        }
      }
    }
    if (l != null) {
      for (var C = 0, _ = l; C < _.length; C++) {
        var m = _[C];
        if (m !== undefined) {
          m[0].parseRewards(m[1]);
        }
      }
    }
  };
  CastleEventPackageData.prototype.getEventPackageByID = function (e) {
    if (this._packageVos.get(e)) {
      return this._packageVos.get(e);
    } else {
      return null;
    }
  };
  CastleEventPackageData.prototype.getPackagePrice = function (e) {
    this._packagePrice = o.int(e.PKPC);
    this.dispatchEvent(new s.CastlePackageEvent(s.CastlePackageEvent.PACKAGEPRICE_GOT));
  };
  Object.defineProperty(CastleEventPackageData.prototype, "packagePrice", {
    get: function () {
      return this._packagePrice;
    },
    enumerable: true,
    configurable: true
  });
  CastleEventPackageData.prototype.parseGBC = function (e) {
    if (this._packageVos != null) {
      for (var t = 0, i = Array.from(this._packageVos.values()); t < i.length; t++) {
        a = i[t];
        if (a !== undefined) {
          a.boughtCount = 0;
        }
      }
    }
    if (e != null) {
      for (var n = 0, o = e; n < o.length; n++) {
        var a;
        var s = a = o[n];
        if (s !== undefined) {
          this.parseBoughtCount(s);
        }
      }
    }
  };
  CastleEventPackageData.prototype.parseBoughtCount = function (e) {
    var t = o.int(e.PID);
    var i = this._packageVos.get(t);
    if (i && i.isStockLimited) {
      var n = o.int(e.AMT);
      i.boughtCount = n;
      r.CastleBasicController.getInstance().dispatchEvent(new s.CastlePackageEvent(s.CastlePackageEvent.PACKAGEINFO_UPDATED));
    }
  };
  CastleEventPackageData.prototype.getFilterRelationByID = function (e) {
    if (this._filterRelations.get(e)) {
      return this._filterRelations.get(e);
    } else {
      return null;
    }
  };
  return CastleEventPackageData;
}(l.CastleEventDispatcher);
exports.CastleEventPackageData = u;
var d = require("./904.js");