Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = function (e) {
  function CastleResourceVillageListItemVO(t, i, n = null) {
    var o = e.call(this) || this;
    o._level = 0;
    o._resourceBonus = 0;
    o._resourceVillageType = 0;
    o._wmo = t;
    o._unitInventory = i;
    o._privateResourceVillage = n;
    if (t && r.instanceOfClass(t, "VillageMapobjectVO")) {
      o._resourceBonus = a.int(t.productivityBoost);
      o._resourceVillageType = a.int(t.villageType);
    } else if (o._privateResourceVillage) {
      o._level = a.int(o._privateResourceVillage.villageInfo.villageLevel);
      o._resourceBonus = a.int(o._privateResourceVillage.villageInfo.bonus.strength);
      o._resourceVillageType = a.int(o._privateResourceVillage.villageInfo.type);
    }
    return o;
  }
  n.__extends(CastleResourceVillageListItemVO, e);
  Object.defineProperty(CastleResourceVillageListItemVO.prototype, "wmo", {
    get: function () {
      return this._wmo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceVillageListItemVO.prototype, "unitInventory", {
    get: function () {
      return this._unitInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceVillageListItemVO.prototype, "privateResourceVillage", {
    get: function () {
      return this._privateResourceVillage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceVillageListItemVO.prototype, "showResourceBonus", {
    get: function () {
      return !!this.wmo && r.instanceOfClass(this.wmo, "VillageMapobjectVO") || !!this._privateResourceVillage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceVillageListItemVO.prototype, "resourceBonus", {
    get: function () {
      return this._resourceBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceVillageListItemVO.prototype, "resourceVillageType", {
    get: function () {
      return this._resourceVillageType;
    },
    enumerable: true,
    configurable: true
  });
  return CastleResourceVillageListItemVO;
}(o.ScrollItemVO);
exports.CastleResourceVillageListItemVO = s;
var r = require("./1.js");