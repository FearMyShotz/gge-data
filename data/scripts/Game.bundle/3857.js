Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./22.js");
var s = require("./4.js");
var r = require("./563.js");
var l = require("./732.js");
var c = function (e) {
  function DefaultLordVO() {
    var t = this;
    t._effects = [];
    t._minLevel = 0;
    t._maxLevel = 0;
    t._shownLevel = 0;
    t._generalID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(DefaultLordVO, e);
  DefaultLordVO.prototype.parseFromXml = function (e, t = true) {
    var i = e.effects || "";
    if (i != "" && t) {
      for (var n = i.split(","), o = 0; o < n.length; o++) {
        var s = n[o].split("&");
        var l = new r.EquipmentBonusVO().parseEquipmentFromValueString(parseInt(s[0]), s[1]);
        this._effects.push(l);
      }
    }
    this._type = e.type || "";
    this._id = parseInt(e.lordID || "");
    this._minLevel = parseInt(a.CastleXMLUtils.getValueOrDefault("minLevel", e, "-1"));
    this._maxLevel = parseInt(a.CastleXMLUtils.getValueOrDefault("maxLevel", e, "-1"));
    this._shownLevel = parseInt(a.CastleXMLUtils.getValueOrDefault("shownLevel", e, "-1"));
    this._generalID = parseInt(a.CastleXMLUtils.getValueOrDefault("generalID", e, "-1"));
  };
  DefaultLordVO.prototype.parseLord = function (e, t = false) {
    this._rawLordEffects = this.parseRawEffects(e ? e.E : null);
    this._areaEffects = this.parseRawEffects(e ? e.AE : null);
    this.parseGeneral(e, t);
  };
  DefaultLordVO.prototype.getUniqueBoni = function (e = false, t = null, i = -1, n = null) {
    var o = [];
    if (this._effects != null) {
      for (var a = 0, s = this._effects; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined && r.matchesConditions(t, i)) {
          o.push(r);
        }
      }
    }
    return o = (o = o.concat(this.checkConditions(this._rawLordEffects, t, i, n))).concat(this.checkConditions(this._areaEffects, t, i, n));
  };
  DefaultLordVO.prototype.getCountOfSetId = function (e) {
    return 0;
  };
  DefaultLordVO.prototype.hasUniqueItemEquipped = function (e) {
    return false;
  };
  Object.defineProperty(DefaultLordVO.prototype, "isAvailableForMovement", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.LordVO.prototype, "isAvailableForMovement").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefaultLordVO.prototype, "isAvailableForEquip", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.LordVO.prototype, "isAvailableForEquip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DefaultLordVO.prototype.getFeatherClassName = function () {
    return "LordFeather_" + this._type;
  };
  DefaultLordVO.prototype.getVisClassName = function () {
    return "LordPic_" + this._type;
  };
  DefaultLordVO.prototype.getVisAsset = function () {
    return "Lord_Icons";
  };
  Object.defineProperty(DefaultLordVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefaultLordVO.prototype, "canUseEquipmentWarningIcon", {
    get: function () {
      return !this._type;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.LordVO.prototype, "canUseEquipmentWarningIcon").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefaultLordVO.prototype, "name", {
    get: function () {
      if (this._type == p.CastleLordData.DEFAULT_LORD_TYPE_PREMIUM) {
        return new o.LocalizedTextVO("lord_name_general_unnamed_extra");
      } else if (this._name && this._name != "") {
        return Object.getOwnPropertyDescriptor(l.LordVO.prototype, "name").get.call(this);
      } else {
        return new o.LocalizedTextVO("lord_name_general_unnamed");
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.LordVO.prototype, "name").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefaultLordVO.prototype, "minLevel", {
    get: function () {
      return this._minLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefaultLordVO.prototype, "maxLevel", {
    get: function () {
      return this._maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefaultLordVO.prototype, "shownLevel", {
    get: function () {
      return this._shownLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefaultLordVO.prototype, "generalID", {
    get: function () {
      return this._generalID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefaultLordVO.prototype, "effects", {
    get: function () {
      return this._effects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefaultLordVO.prototype, "isBaron", {
    get: function () {
      return this._type.indexOf("baron") > -1;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.LordVO.prototype, "isBaron").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DefaultLordVO.prototype.copyFromLord = function (t) {
    e.prototype.copyFromLord.call(this, t);
    var i = u.castAs(t, "DefaultLordVO");
    if (d.instanceOfClass(i, "DefaultLordVO")) {
      this._effects = i.effects;
      this._type = i.type;
      this._minLevel = i.minLevel;
      this._maxLevel = i.maxLevel;
      this._shownLevel = i.shownLevel;
      this._generalID = i.generalID;
    }
  };
  Object.defineProperty(DefaultLordVO.prototype, "assignedGeneralVO", {
    get: function () {
      if (this._assignedGeneralVO) {
        return this._assignedGeneralVO;
      } else if (this._generalID > 0) {
        return s.CastleModel.generalsData.npcGenerals.get(this._generalID);
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.LordVO.prototype, "assignedGeneralVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return DefaultLordVO;
}(l.LordVO);
exports.DefaultLordVO = c;
var u = require("./1.js");
var d = require("./1.js");
var p = require("./1107.js");