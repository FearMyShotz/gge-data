Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./6.js");
var s = require("./2324.js");
var r = require("./4.js");
var l = function (e) {
  function AutoSellEquipmentsVO() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._actives = t.createActiveMatrix();
    return t;
  }
  n.__extends(AutoSellEquipmentsVO, e);
  AutoSellEquipmentsVO.prototype.setAllActiveStates = function (e) {
    for (var t = 0; t < AutoSellEquipmentsVO.SLOT_ORDER.length; ++t) {
      var i = this._actives.get(AutoSellEquipmentsVO.SLOT_ORDER[t]);
      for (var n = 0; n < AutoSellEquipmentsVO.RARITY_ORDER.length; ++n) {
        i.set(AutoSellEquipmentsVO.RARITY_ORDER[n], e);
      }
    }
  };
  AutoSellEquipmentsVO.prototype.parseASG = function (e) {
    var t = e;
    if (t && (this.setAllActiveStates(false), t != null)) {
      for (var i = 0, n = t; i < n.length; i++) {
        var s = n[i];
        if (s !== undefined) {
          var r = a.int(s[0]);
          var l = a.int(s[1]);
          this.setActive(r, r == o.EquipmentConst.SLOT_HERO ? l - o.EquipmentConst.RARENESS_HERO_COMMON + 1 : l, true);
        }
      }
    }
  };
  AutoSellEquipmentsVO.prototype.setActive = function (e, t, i) {
    var n = this._actives.get(e);
    if (n) {
      n.set(t, i);
    }
  };
  AutoSellEquipmentsVO.prototype.copy = function (e) {
    if (this._actives != null) {
      for (var t = 0, i = Array.from(this._actives.keys()); t < i.length; t++) {
        var n = i[t];
        var o = this._actives.get(n);
        var a = e._actives.get(n);
        if (o) {
          for (var s = 0, r = Array.from(o.keys()); s < r.length; s++) {
            var l = r[s];
            o.set(l, a.get(l));
          }
        }
      }
    }
  };
  AutoSellEquipmentsVO.prototype.sendConfigToServer = function () {
    r.CastleModel.smartfoxClient.sendCommandVO(new s.C2SSetAutoSellEquipmentConditionsEventVO(this));
  };
  AutoSellEquipmentsVO.prototype.createActiveMatrix = function () {
    var e = new Map();
    for (var t = 0; t < AutoSellEquipmentsVO.SLOT_ORDER.length; ++t) {
      var i = new Map();
      for (var n = 0; n < AutoSellEquipmentsVO.RARITY_ORDER.length; ++n) {
        i.set(AutoSellEquipmentsVO.RARITY_ORDER[n], false);
      }
      e.set(AutoSellEquipmentsVO.SLOT_ORDER[t], i);
    }
    return e;
  };
  AutoSellEquipmentsVO.prototype.isActive = function (e, t) {
    var i = this._actives.get(e);
    return !!i && !!i.get(t);
  };
  AutoSellEquipmentsVO.prototype.isAnyActive = function () {
    if (this._actives != null) {
      for (var e = 0, t = Array.from(this._actives.values()); e < t.length; e++) {
        var i = t[e];
        if (i) {
          for (var n = 0, o = Array.from(i.values()); n < o.length; n++) {
            if (o[n]) {
              return true;
            }
          }
        }
      }
    }
    return false;
  };
  AutoSellEquipmentsVO.prototype.getCurrentActiveStatesCount = function () {
    var e = 0;
    for (var t = 0; t < AutoSellEquipmentsVO.SLOT_ORDER.length; ++t) {
      var i = this._actives.get(AutoSellEquipmentsVO.SLOT_ORDER[t]);
      for (var n = 0; n < AutoSellEquipmentsVO.RARITY_ORDER.length; ++n) {
        if (i.get(AutoSellEquipmentsVO.RARITY_ORDER[n])) {
          e++;
        }
      }
    }
    return e;
  };
  Object.defineProperty(AutoSellEquipmentsVO.prototype, "actives", {
    get: function () {
      return this._actives;
    },
    enumerable: true,
    configurable: true
  });
  AutoSellEquipmentsVO.__initialize_static_members = function () {
    AutoSellEquipmentsVO.NUMBER_OF_ACTIVE_STATES = a.int(AutoSellEquipmentsVO.SLOT_ORDER.length * AutoSellEquipmentsVO.RARITY_ORDER.length);
  };
  AutoSellEquipmentsVO.SLOT_ORDER = [o.EquipmentConst.SLOT_HERO, o.EquipmentConst.SLOT_HELMET, o.EquipmentConst.SLOT_ARMOR, o.EquipmentConst.SLOT_WEAPON, o.EquipmentConst.SLOT_ARTIFACT];
  AutoSellEquipmentsVO.RARITY_ORDER = [o.EquipmentConst.RARENESS_COMMON, o.EquipmentConst.RARENESS_RARE, o.EquipmentConst.RARENESS_EPIC, o.EquipmentConst.RARENESS_LEGENDARY];
  return AutoSellEquipmentsVO;
}(require("./1310.js").ASubAutoSellVO);
exports.AutoSellEquipmentsVO = l;
l.__initialize_static_members();