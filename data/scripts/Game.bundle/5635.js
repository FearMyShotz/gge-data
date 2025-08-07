Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./1970.js");
var r = require("./680.js");
var l = require("./15.js");
var c = require("./54.js");
var u = require("./625.js");
var d = require("./4.js");
var p = require("./217.js");
var h = require("./447.js");
var g = require("./5636.js");
var C = function (e) {
  function FusionForgeData(t) {
    var i = this;
    i._xml = new g.FusionForgeDataXml();
    i._forges = new Map();
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).xml.parseXml(t);
    i.init();
    return i;
  }
  n.__extends(FusionForgeData, e);
  FusionForgeData.prototype.init = function () {
    this._forges = new Map();
    for (var e = 0, t = Array.from(this._xml.fusionSystems.values()); e < t.length; e++) {
      var i = t[e];
      if (i !== undefined) {
        var n = new f.FusionForgeVO(i.id);
        this._forges.set(i.id, n);
      }
    }
    l.CastleBasicController.getInstance().addEventListener(r.CastleLoginEvent.ON_GBD_ARRIVED, this.bindFunction(this.onGbdArrived));
  };
  FusionForgeData.prototype.reset = function () {
    if (this._forges != null) {
      for (var t = 0, i = Array.from(this._forges.values()); t < i.length; t++) {
        i[t].destroy();
      }
    }
    this.init();
    e.prototype.destroy.call(this);
  };
  FusionForgeData.prototype.parseFFI = function (e) {
    if (e) {
      if (e != null) {
        for (var t = 0, i = e; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            this.getForge(n.FID).parseServerObject(n);
          }
        }
      }
      l.CastleBasicController.getInstance().dispatchEvent(new h.FusionForgeEvent(h.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED));
    }
  };
  FusionForgeData.prototype.parseFFL = function (e = null) {
    l.CastleBasicController.getInstance().dispatchEvent(new h.FusionForgeEvent(h.FusionForgeEvent.ON_FORGE_LEVEL_UP, [e]));
  };
  FusionForgeData.prototype.parseFSR = function (e = null) {
    l.CastleBasicController.getInstance().dispatchEvent(new h.FusionForgeEvent(h.FusionForgeEvent.ON_FORGE_ENERGY_RECHARGED, [e]));
  };
  FusionForgeData.prototype.parseDFF = function (e) {
    if (e) {
      var t = d.CastleModel.wodData.createVObyWOD(e.WID, m.CastleWodData.TYPE_BUILDING);
      t.parseServerInfoShort(e);
      t.updateData();
      var i = new _.CollectableItemBuildingVO();
      i.buildingVO = t;
      var n = new u.DecorationForgeSelectResultVO(i, e.SID, e.AID);
      var o = a.int(e.BFXP);
      l.CastleBasicController.getInstance().dispatchEvent(new h.FusionForgeEvent(h.FusionForgeEvent.ON_FUSE_DONE, [n, o]));
    }
  };
  FusionForgeData.prototype.parseFCC = function (e) {
    l.CastleBasicController.getInstance().dispatchEvent(new h.FusionForgeEvent(h.FusionForgeEvent.ON_CATALYST_CONVERSION_DONE, [e]));
  };
  FusionForgeData.prototype.getForge = function (e) {
    return this._forges.get(e);
  };
  FusionForgeData.prototype.hasAnyForgeFullEnergy = function () {
    if (this._forges != null) {
      for (var e = 0, t = Array.from(this._forges.values()); e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && i.getCurrentEnergyFillFactor() >= p.ClientConstFusion.FULL_ENERGY_PERCENTAGE_FACTOR) {
          return true;
        }
      }
    }
    return false;
  };
  FusionForgeData.prototype.onGbdArrived = function (e) {
    var t = [];
    for (var i = 0, n = Array.from(this._xml.fusionSystems.values()); i < n.length; i++) {
      var o = n[i];
      t.push(o.id);
    }
    d.CastleModel.smartfoxClient.sendCommandVO(new s.C2SGetFusionForgeInfoEventVO(t));
  };
  Object.defineProperty(FusionForgeData.prototype, "xml", {
    get: function () {
      return this._xml;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeData.prototype, "forges", {
    get: function () {
      return this._forges;
    },
    enumerable: true,
    configurable: true
  });
  return FusionForgeData;
}(c.CastleBasicData);
exports.FusionForgeData = C;
var _ = require("./291.js");
var m = require("./56.js");
var f = require("./5642.js");
o.classImplementsInterfaces(C, "IUpdatable");