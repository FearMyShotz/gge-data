Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./4.js");
var u = require("./71.js");
var d = function (e) {
  function AreaDataMorality() {
    var t = this;
    t._maxUnitStorage = 0;
    t._morality = 0;
    t._factionBuff = 0;
    t._maxAuxiliariesStorage = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AreaDataMorality, e);
  AreaDataMorality.prototype.parseGPA = function (e) {
    this._maxUnitStorage = l.int(e.US);
    this._maxAuxiliariesStorage = l.int(e.AUS);
    this._morality = l.int(e.M);
    this._factionBuff = e.RFPPA;
    if (this.areaData.isTreasureCamp) {
      var t = c.CastleModel.specialEventData.activeSeasonVO.treasureMapVO;
      if (t) {
        t.unitStorage = this._maxUnitStorage;
        t.morality = this._morality;
        t.resStorageCapacityWood = l.int(this.areaData.storage.getItem(h.CollectableEnum.WOOD).maxAmount);
        t.resStorageCapacityStone = l.int(this.areaData.storage.getItem(h.CollectableEnum.STONE).maxAmount);
        t.resStorageCapacityFood = l.int(this.areaData.storage.getItem(h.CollectableEnum.FOOD).maxAmount);
      }
    }
    p.CastleComponent.controller.dispatchEvent(new u.AreaDataEvent(u.AreaDataEvent.ON_INFO_VALUES_CHANGED));
  };
  AreaDataMorality.prototype.getTroopStrength = function () {
    var e = 0;
    for (var t = 0, i = this.areaData.isoData.objects.getCompleteObjectsList(); t < i.length; t++) {
      var n = i[t];
      if (n && n.morality < 0 && n.buildingState.isFunctionally) {
        e += l.int(Math.abs(n.morality));
      }
    }
    return e;
  };
  AreaDataMorality.prototype.getMoralityPlus = function () {
    var e = 0;
    for (var t = 0, i = this.areaData.isoData.objects.getCompleteObjectsList(); t < i.length; t++) {
      var n = i[t];
      if (n && n.morality > 0 && n.buildingState.isFunctionally) {
        e += l.int(Math.abs(n.morality));
      }
    }
    return e;
  };
  AreaDataMorality.prototype.getFactionMoralityPlus = function () {
    var e = o.castAs(c.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
    if (e && e.isOneLMSActive) {
      return 0;
    } else if (this._factionBuff < 0.5 && this.areaData.areaInfo.ownerInfo.factionID == r.FactionConst.RED_FACTION) {
      return l.int(this.getMoralityPlus() * r.FactionConst.getMoraleBoostFromFactionStrength(this._factionBuff));
    } else if (this._factionBuff > 0.5 && this.areaData.areaInfo.ownerInfo.factionID == r.FactionConst.BLUE_FACTION) {
      return l.int(this.getMoralityPlus() * r.FactionConst.getMoraleBoostFromFactionStrength(1 - this._factionBuff));
    } else {
      return 0;
    }
  };
  Object.defineProperty(AreaDataMorality.prototype, "maxUnitStorage", {
    get: function () {
      return this._maxUnitStorage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataMorality.prototype, "morality", {
    get: function () {
      return this._morality;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataMorality.prototype, "factionBuff", {
    get: function () {
      return this._factionBuff;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataMorality.prototype, "maxAuxiliariesStorage", {
    get: function () {
      return this._maxAuxiliariesStorage;
    },
    enumerable: true,
    configurable: true
  });
  return AreaDataMorality;
}(require("./562.js").AAreaDataComponent);
exports.AreaDataMorality = d;
var p = require("./14.js");
var h = require("./12.js");
a.classImplementsInterfaces(d, "ICollectableRendererList", "IAreaDataComponent");