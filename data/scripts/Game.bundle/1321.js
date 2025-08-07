Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./4.js");
var u = require("./732.js");
var d = function (e) {
  function BaronVO() {
    var t = this;
    t._lockedInCastleID = -1;
    t._baronOrderPosition = 0;
    t._isDummyBaron = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(BaronVO, e);
  BaronVO.prototype.getVisClassName = function () {
    if (this.isHero) {
      return this.heroPicVisClassName;
    } else {
      return "BaronPic_" + this.picID;
    }
  };
  BaronVO.prototype.getFeatherClassName = function () {
    return "BaronPic_" + this.picID;
  };
  BaronVO.prototype.getVisAsset = function () {
    if (this.isHero) {
      return this.heroPicAssetURL;
    } else {
      return "Lord_Icons";
    }
  };
  BaronVO.prototype.parseLord = function (t, i = false, n = false) {
    e.prototype.parseLord.call(this, t, i, n);
    this._lockedInCastleID = l.int(t.LICID);
    this._baronOrderPosition = l.int(BaronVO.PIC_ID_ORDER.indexOf(this.picID));
  };
  Object.defineProperty(BaronVO.prototype, "isAvailableForMovement", {
    get: function () {
      return !(this._lockedInCastleID >= 0) && (this.picID != o.EquipmentConst.PICK_BARON_FACTION || c.CastleModel.kingdomData.activeKingdomID == a.FactionConst.BARON_ID) && (this.picID != o.EquipmentConst.PICK_BARON_ISLAND || c.CastleModel.kingdomData.activeKingdomID == s.WorldIsland.KINGDOM_ID) && Object.getOwnPropertyDescriptor(u.LordVO.prototype, "isAvailableForMovement").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.LordVO.prototype, "isAvailableForMovement").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaronVO.prototype, "lockedInCastleID", {
    get: function () {
      return this._lockedInCastleID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaronVO.prototype, "baronOrderPosition", {
    get: function () {
      return this._baronOrderPosition;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaronVO.prototype, "name", {
    get: function () {
      return new r.LocalizedTextVO("equipment_itemType_baron");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.LordVO.prototype, "name").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaronVO.prototype, "isDummyBaron", {
    get: function () {
      return this._isDummyBaron;
    },
    set: function (e) {
      this._isDummyBaron = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BaronVO.prototype, "isBaron", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.LordVO.prototype, "isBaron").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BaronVO.PIC_ID_ORDER = [0, 6, 7, 8, 1, 13, 2, 3, 4, 10, 11, 12, 9, 5];
  return BaronVO;
}(u.LordVO);
exports.BaronVO = d;