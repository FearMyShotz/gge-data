Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = function (e) {
  function LongTermPointEventSkin(t, i, n, a) {
    var s = this;
    s._id = 0;
    s._buildingWod = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this, i, o.BasicEnum.instantiationKey) || this)._id = t;
    s._assetName = n;
    s._buildingWod = a;
    return s;
  }
  n.__extends(LongTermPointEventSkin, e);
  LongTermPointEventSkin.getTypeById = function (e) {
    return this.getByProperty(LongTermPointEventSkin, "id", e, LongTermPointEventSkin.DEFAULT);
  };
  Object.defineProperty(LongTermPointEventSkin.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventSkin.prototype, "textId", {
    get: function () {
      return this.name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventSkin.prototype, "textSuffix", {
    get: function () {
      if (this.name) {
        return "_" + this.name;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventSkin.prototype, "assetName", {
    get: function () {
      return this._assetName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventSkin.prototype, "buildingWod", {
    get: function () {
      return this._buildingWod;
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventSkin.__initialize_static_members = function () {
    LongTermPointEventSkin.DEFAULT = new LongTermPointEventSkin(a.LongTermPointEventConst.NO_SKIN, "", "Default", 0);
    LongTermPointEventSkin.HALLOWEEN = new LongTermPointEventSkin(a.LongTermPointEventConst.HALLOWEEN_SKIN, "halloween", "Halloween", 640);
    LongTermPointEventSkin.WINTER = new LongTermPointEventSkin(a.LongTermPointEventConst.WINTER_SKIN, "winter", "Winter", 642);
    LongTermPointEventSkin.SPRING = new LongTermPointEventSkin(a.LongTermPointEventConst.SPRING_SKIN, "spring", "Spring", 1486);
    LongTermPointEventSkin.INDIA = new LongTermPointEventSkin(a.LongTermPointEventConst.REUSABLE_SKIN, "india", "India", 1500);
    LongTermPointEventSkin.NEWKING = new LongTermPointEventSkin(a.LongTermPointEventConst.NEW_KING_SKIN, "newKing", "NewKing", 1511);
    LongTermPointEventSkin.ST_PATRICKS_DAY = new LongTermPointEventSkin(a.LongTermPointEventConst.ST_PATRICKS_DAY_SKIN, "stPatrick", "StPatrick", 1653);
    LongTermPointEventSkin.ANNI10 = new LongTermPointEventSkin(a.LongTermPointEventConst.ANNIVERSARY_SKIN, "anniversaryLTPE", "Anni10", 2210);
    LongTermPointEventSkin.OKTOBERFEST = new LongTermPointEventSkin(a.LongTermPointEventConst.OKTOBERFEST_SKIN, "oktoberfestLTPE", "Oktoberfest", 2211);
    LongTermPointEventSkin.XMAS = new LongTermPointEventSkin(a.LongTermPointEventConst.CHRISTMAS_SKIN, "christmasLTPE", "Xmas", 2284);
    LongTermPointEventSkin.MAYA = new LongTermPointEventSkin(a.LongTermPointEventConst.MAYA_SKIN, "maya", "Maya", 2742);
    LongTermPointEventSkin.PIRATES = new LongTermPointEventSkin(a.LongTermPointEventConst.PIRATES_SKIN, "pirates", "Pirates", 2741);
    LongTermPointEventSkin.DRAGON_RIDER = new LongTermPointEventSkin(a.LongTermPointEventConst.DRAGONRIDERS_SKIN, "dragonrider", "Dragonrider", 2804);
  };
  return LongTermPointEventSkin;
}(o.BasicEnum);
exports.LongTermPointEventSkin = s;
s.__initialize_static_members();