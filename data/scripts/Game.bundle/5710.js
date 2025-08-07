Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./54.js");
var s = require("./5711.js");
var r = function (e) {
  function CastlePrivateResourceVillageData(t) {
    var i = e.call(this) || this;
    i.parse(t);
    return i;
  }
  n.__extends(CastlePrivateResourceVillageData, e);
  CastlePrivateResourceVillageData.prototype.reset = function () {};
  CastlePrivateResourceVillageData.prototype.parse = function (e) {
    this.privateVillages = new Map();
    var t = e.privateVillages;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = new s.PrivateResourceVillageInfoVO();
          a.fillFromParamXML(o);
          this.privateVillages.set(a.villageID, a);
        }
      }
    }
  };
  CastlePrivateResourceVillageData.prototype.getVillageByID = function (e) {
    return this.privateVillages.get(e);
  };
  CastlePrivateResourceVillageData.prototype.getPrivateVillages = function (e, t) {
    var i = [];
    if (this.privateVillages != null) {
      for (var n = 0, o = Array.from(this.privateVillages.values()); n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.kingdomID == e && a.type == t) {
          i.push(a);
        }
      }
    }
    i.sort(this.bindFunction(this.sortByVillageLevel));
    return i;
  };
  CastlePrivateResourceVillageData.prototype.sortByVillageLevel = function (e, t) {
    return e.villageLevel - t.villageLevel;
  };
  CastlePrivateResourceVillageData.prototype.getPrivateVillageInfo = function (e, t, i) {
    if (this.privateVillages != null) {
      for (var n = 0, o = Array.from(this.privateVillages.values()); n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.kingdomID == e && a.type == t && a.villageLevel == i) {
          return a;
        }
      }
    }
    return null;
  };
  return CastlePrivateResourceVillageData;
}(a.CastleBasicData);
exports.CastlePrivateResourceVillageData = r;
o.classImplementsInterfaces(r, "IUpdatable", "ICastleBasicData");