Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ExpansionCostsData(e) {
    this._getExpansionCostVOList(e);
  }
  ExpansionCostsData.prototype._getExpansionCostVOList = function (e) {
    var t = e.expansions;
    this._expansionCostsVOList = [];
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var c = n[i];
        if (c !== undefined) {
          var u;
          for (var p = a.CastleXMLUtils.getIntArrayFromString(a.CastleXMLUtils.getValueOrDefault("spaceIDs", c, ""), ","), h = 0; h < p.length; h++) {
            (u = new d.ExpansionCostsVO()).expansionID = parseInt(a.CastleXMLUtils.getValueOrDefault("expansionID", c, "0"));
            u.spaceID = o.int(p[h]);
            u.expansionLevel = parseInt(a.CastleXMLUtils.getValueOrDefault("expansionLevel", c, "0"));
            u.costs = r.CollectableManager.parser.x2cList.createList(c, s.ClientConstCollectable.XML_PREFIX_COST);
            u.costs = u.costs.getFilteredListWithoutType(l.CollectableEnum.C2);
            u.costC2 = parseInt(a.CastleXMLUtils.getValueOrDefault("costC2", c, "0"));
            u.sceatSkillLocked = parseInt(a.CastleXMLUtils.getValueOrDefault("sceatSkillLocked", c, "0"));
            this._expansionCostsVOList.push(u);
          }
        }
      }
    }
  };
  ExpansionCostsData.prototype._getCurrentExpansionCostsVO = function () {
    var e = o.int(u.CastleModel.areaData.activeArea.spaceId);
    var t = o.int(u.CastleModel.areaData.activeIsoData.objects.groundObjects.expansionAmount + 1);
    for (var i = 0; i < this._expansionCostsVOList.length; i++) {
      var n = this._expansionCostsVOList[i];
      if (n.spaceID == e && n.expansionLevel == t) {
        return n;
      }
    }
    return null;
  };
  ExpansionCostsData.prototype.getExpandCostC2 = function () {
    if (this.expansionAvailable()) {
      return o.int(this._getCurrentExpansionCostsVO().costC2);
    } else {
      return 0;
    }
  };
  ExpansionCostsData.prototype.getExpandCostNormal = function () {
    if (this.expansionAvailable()) {
      return this._getCurrentExpansionCostsVO().costs;
    } else {
      return new c.CollectableList();
    }
  };
  ExpansionCostsData.prototype.getSceatSkillLocked = function () {
    if (this.expansionAvailable()) {
      return this._getCurrentExpansionCostsVO().sceatSkillLocked;
    } else {
      return 0;
    }
  };
  ExpansionCostsData.prototype.getCurrentExpansionCostsVO = function () {
    return this._getCurrentExpansionCostsVO();
  };
  ExpansionCostsData.prototype.expansionAvailable = function () {
    return !!this._getCurrentExpansionCostsVO();
  };
  return ExpansionCostsData;
}();
exports.ExpansionCostsData = n;
var o = require("./6.js");
var a = require("./22.js");
var s = require("./86.js");
var r = require("./50.js");
var l = require("./12.js");
var c = require("./48.js");
var u = require("./4.js");
var d = require("./4318.js");