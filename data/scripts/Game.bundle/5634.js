Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function FusionForgeDataXml() {
    this._fusionSystems = new Map();
    this._fusionForges = new Map();
    this._catalysts = new Map();
    this._forgeMinuteSkips = new Map();
    this._fusionCostSequences = new Map();
    this._fusionShopPackages = new Map();
  }
  FusionForgeDataXml.prototype.parseXml = function (e) {
    this._fusionSystems = a.CastleXMLUtils.createDicFromXmlNode(e, "fusionSystems", p.XmlFusionSystemVO);
    this._fusionForges = a.CastleXMLUtils.createDicFromXmlNode(e, "fusionForges", d.XmlFusionForgeVO, "forgeId");
    this._catalysts = a.CastleXMLUtils.createDicFromXmlNode(e, "catalysts", l.XmlCatalystVO, "currencyId");
    this._forgeMinuteSkips = a.CastleXMLUtils.createDicFromXmlNode(e, "forgeMinuteSkips", c.XmlForgeMinuteSkipVO);
    this._fusionCostSequences = a.CastleXMLUtils.createDicFromXmlNode(e, "fusionCostSequences", u.XmlFusionCostSequenceVO);
    this.parseFusionShopPackages(e);
  };
  FusionForgeDataXml.prototype.parseFusionShopPackages = function (e) {
    this._fusionShopPackages = new Map();
    for (var t = 0, i = e.fusionShops; t < i.length; t++) {
      var n = i[t];
      var s = o.int(a.CastleXMLUtils.getIntAttribute("id", n));
      var r = [];
      for (var l = 0, c = a.CastleXMLUtils.getStringAttribute("packageIDs", n).split("+"); l < c.length; l++) {
        var u = c[l];
        r.push(parseInt(u));
      }
      this._fusionShopPackages.set(s, r);
    }
  };
  FusionForgeDataXml.prototype.getFusionSystem = function (e) {
    return this._fusionSystems.get(e);
  };
  FusionForgeDataXml.prototype.getFusionForge = function (e) {
    return this._fusionForges.get(e);
  };
  FusionForgeDataXml.prototype.getForgeMinuteSkips = function (e) {
    return this._forgeMinuteSkips.get(e);
  };
  FusionForgeDataXml.prototype.getFusionCostSequences = function (e) {
    return this._fusionCostSequences.get(e);
  };
  FusionForgeDataXml.prototype.getFusionShopPackageIds = function (e) {
    return this._fusionShopPackages.get(e);
  };
  FusionForgeDataXml.prototype.getFusionShopPackages = function (e) {
    var t = this.getFusionShopPackageIds(e);
    var i = [];
    if (t != null) {
      for (var n = 0, o = t; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          i.push(s.CastleModel.eventPackageData.getEventPackageByID(a));
        }
      }
    }
    i.sort(this.bindFunction(this.sortPackagesBySortOrder));
    return i;
  };
  FusionForgeDataXml.prototype.sortPackagesBySortOrder = function (e, t) {
    return e.sortOrder - t.sortOrder;
  };
  FusionForgeDataXml.prototype.getCostSequenceByTargetLevel = function (e, t) {
    var i = this.getNumberOfSequenceCostIterations(e);
    var n = o.int(r.ClientConstFusion.getSequenceCostIterationIndex(i, t));
    if (this._fusionCostSequences != null) {
      for (var a = 0, s = Array.from(this._fusionCostSequences.values()); a < s.length; a++) {
        var l = s[a];
        if (l !== undefined && e == l.forgeId && n == l.fusionTargetLevelIterationIndex) {
          return l;
        }
      }
    }
    return null;
  };
  FusionForgeDataXml.prototype.getCatalystInfo = function (e, t) {
    if (this._catalysts != null) {
      for (var i = 0, n = Array.from(this._catalysts.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && e == o.forgeId && t == o.currencyId) {
          return o;
        }
      }
    }
    return null;
  };
  FusionForgeDataXml.prototype.getCatalystsByForge = function (e) {
    var t = [];
    if (this._catalysts != null) {
      for (var i = 0, n = Array.from(this._catalysts.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && e == o.forgeId) {
          t.push(o);
        }
      }
    }
    return t;
  };
  FusionForgeDataXml.prototype.getMinimumCatalystTier = function (e, t) {
    o.int(s.CastleModel.fusionForgeData.getForge(e).level);
    if (this._catalysts != null) {
      for (var i = 0, n = Array.from(this._catalysts.values()); i < n.length; i++) {
        var a = n[i];
        if (a !== undefined && a.forgeId == e && t <= a.maxUsableFusionLevel) {
          return a.tier;
        }
      }
    }
    return -1;
  };
  FusionForgeDataXml.prototype.getNumberOfSequenceCostIterations = function (e) {
    var t = 0;
    if (this._fusionCostSequences != null) {
      for (var i = 0, n = Array.from(this._fusionCostSequences.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && e == o.forgeId) {
          t++;
        }
      }
    }
    return t;
  };
  Object.defineProperty(FusionForgeDataXml.prototype, "fusionSystems", {
    get: function () {
      return this._fusionSystems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeDataXml.prototype, "fusionForges", {
    get: function () {
      return this._fusionForges;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeDataXml.prototype, "catalysts", {
    get: function () {
      return this._catalysts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeDataXml.prototype, "forgeMinuteSkips", {
    get: function () {
      return this._forgeMinuteSkips;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeDataXml.prototype, "fusionCostSequences", {
    get: function () {
      return this._fusionCostSequences;
    },
    enumerable: true,
    configurable: true
  });
  return FusionForgeDataXml;
}();
exports.FusionForgeDataXml = n;
var o = require("./6.js");
var a = require("./22.js");
var s = require("./4.js");
var r = require("./216.js");
var l = require("./5635.js");
var c = require("./5636.js");
var u = require("./5637.js");
var d = require("./5638.js");
var p = require("./5639.js");