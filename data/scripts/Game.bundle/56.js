Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./309.js");
var r = require("./306.js");
var l = function () {
  function CastleWodData(e) {
    this._voList = new Map();
    this.parseVOFromWODXmls(e);
    this._itemsXmlVersion = e.versionInfo.version["@value"];
    n.debug("parsed itemXML version:" + this._itemsXmlVersion);
    r.CastleVersionInformation.versionInstance.itemXmlVersion = this._itemsXmlVersion;
  }
  CastleWodData.prototype.initWodList = function () {
    this._wodXmlElements = new Map();
    this._buildingXmlElements = new Map();
    this._unitXmlElements = new Map();
    this._horseXmlElements = new Map();
    this._rubyWishingWellXmlElements = new Map();
    this._wodXmlElements.set(CastleWodData.TYPE_BUILDING, this._buildingXmlElements);
    this._wodXmlElements.set(CastleWodData.TYPE_UNIT, this._unitXmlElements);
    this._wodXmlElements.set(CastleWodData.TYPE_HORSE, this._horseXmlElements);
    this._wodXmlElements.set(CastleWodData.TYPE_RUBY_WISHING_WELL, this._rubyWishingWellXmlElements);
    this._voList = new Map();
    this._buildingsName2WodId = new Map();
    this._buildingVOs = new Map();
    this._unitVOs = new Map();
    this._horseVOs = new Map();
    this._rubyWishingWellVOs = new Map();
    this._voList.set(CastleWodData.TYPE_BUILDING, this._buildingVOs);
    this._voList.set(CastleWodData.TYPE_UNIT, this._unitVOs);
    this._voList.set(CastleWodData.TYPE_HORSE, this._horseVOs);
    this._voList.set(CastleWodData.TYPE_RUBY_WISHING_WELL, this._rubyWishingWellVOs);
  };
  CastleWodData.prototype.createVObyWOD = function (e, t) {
    if (t < CastleWodData.TYPE_BUILDING || t > CastleWodData.TYPE_RUBY_WISHING_WELL) {
      n.debug("UNKNOWN TYPE: " + t);
      return null;
    }
    var i = this._wodXmlElements.get(t).get(e);
    try {
      parseInt(i.wodID || "");
    } catch (t) {
      n.debug("UNKNOWN WOD: " + e);
      return null;
    }
    var a = i.name || "";
    var r = i.group || "";
    var l = o.getDefinitionByName(this.getClassName(r, a));
    if (l) {
      var c = new l();
      c.parseXmlNode(i);
      if (c instanceof s.AIsoObjectVO) {
        c.init();
      }
      return c;
    }
    return null;
  };
  CastleWodData.prototype.getClassName = function (e, t) {
    return t + e + "VO";
  };
  CastleWodData.prototype.getVOArrayByWODArray = function (e, t) {
    var i = [];
    for (var n = 0; n < e.length; n++) {
      i.push(this.createVObyWOD(e[n], t));
    }
    return i;
  };
  CastleWodData.prototype.parseVOFromWODXmls = function (e) {
    this.initWodList();
    var t = e.buildings;
    this.parseVOFromWODXml(t, CastleWodData.TYPE_BUILDING);
    var i = e.units;
    this.parseVOFromWODXml(i, CastleWodData.TYPE_UNIT);
    var n = e.horses;
    this.parseVOFromWODXml(n, CastleWodData.TYPE_HORSE);
    var o = e.wishingwells;
    this.parseVOFromWODXml(o, CastleWodData.TYPE_RUBY_WISHING_WELL);
  };
  CastleWodData.prototype.getHighestUpgradeForBuilding = function (e) {
    for (var t, i = this.createVObyWOD(e, CastleWodData.TYPE_BUILDING); t = i.getUpgradeVO();) {
      i = t;
    }
    return i;
  };
  CastleWodData.prototype.parseVOFromWODXml = function (e, t) {
    if (e != null) {
      var i = "";
      var a = undefined;
      for (var r = 0, l = e; r < l.length; r++) {
        var c = l[r];
        if (c !== undefined) {
          try {
            var u;
            var d = parseInt(c.wodID || "");
            var p = c.name || "";
            var h = c.group || "";
            this._wodXmlElements.get(t).set(d, c);
            i = this.getClassName(h, p);
            (a = new (o.getDefinitionByName(i))()).parseXmlNode(c);
            if ("worldIndex" in a) {
              continue;
            }
            if (t == CastleWodData.TYPE_BUILDING) {
              if (a.level && a.level > 0) {
                if (this._buildingsName2WodId.has(p)) {
                  if ((u = this._buildingsName2WodId.get(p))[CastleWodData.MAPPING_LEVEL] > a.level) {
                    u[CastleWodData.MAPPING_LEVEL] = a.level;
                    u[CastleWodData.MAPPING_WODID] = a.wodId;
                  }
                } else {
                  (u = {})[CastleWodData.MAPPING_LEVEL] = a.level;
                  u[CastleWodData.MAPPING_WODID] = a.wodId;
                  this._buildingsName2WodId.set(p, u);
                }
              }
            }
            if (a instanceof s.AIsoObjectVO) {
              a.init();
            }
            this._voList.get(t).set(d, a);
          } catch (e) {
            n.debug(e.stack);
          }
        }
      }
    }
  };
  CastleWodData.prototype.getBuildingOriginalIdById = function (e) {
    if (!this._voList.get(CastleWodData.TYPE_BUILDING).get(e)) {
      n.debug("The wodId:" + e + " Was not located in the buildings");
      return e;
    }
    var t = this._voList.get(CastleWodData.TYPE_BUILDING).get(e);
    var i = t.objectType;
    if (i == c.IsoObjectEnum.DECO || i == c.IsoObjectEnum.RUBY_MINE || i == c.IsoObjectEnum.COIN_MINE || i == c.IsoObjectEnum.CUSTOM_DECO || i == c.IsoObjectEnum.FACTION_DECO || i == c.IsoObjectEnum.ALLIANCE_DECO) {
      return e;
    } else {
      return a.int(this._buildingsName2WodId.get(t.name)[CastleWodData.MAPPING_WODID]);
    }
  };
  CastleWodData.prototype.getUnitVOByWodId = function (e) {
    return this._voList.get(CastleWodData.TYPE_UNIT).get(e);
  };
  CastleWodData.prototype.getBuildingVOById = function (e) {
    var t = this._voList.get(CastleWodData.TYPE_BUILDING).get(e);
    t ||= this._voList.get(CastleWodData.TYPE_RUBY_WISHING_WELL).get(e);
    return t;
  };
  CastleWodData.prototype.voSubList = function (e) {
    return this._voList.get(e);
  };
  Object.defineProperty(CastleWodData.prototype, "itemsXmlVersion", {
    get: function () {
      return this._itemsXmlVersion;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWodData.prototype, "wodXmlElements", {
    get: function () {
      return this._wodXmlElements;
    },
    enumerable: true,
    configurable: true
  });
  CastleWodData.__initialize_static_members = function () {
    CastleWodData.NAME = "CastleWodData";
    CastleWodData.TYPE_BUILDING = 0;
    CastleWodData.TYPE_UNIT = 1;
    CastleWodData.TYPE_HORSE = 2;
    CastleWodData.TYPE_RUBY_WISHING_WELL = 3;
    CastleWodData.MAPPING_WODID = "wodID";
    CastleWodData.MAPPING_LEVEL = "Level";
  };
  return CastleWodData;
}();
exports.CastleWodData = l;
var c = require("./80.js");
l.__initialize_static_members();