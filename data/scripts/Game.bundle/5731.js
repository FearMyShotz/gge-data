Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./3.js");
var a = require("./6.js");
var s = require("./562.js");
var r = function () {
  function XmlEquipmentSetVO(e, t) {
    this._id = 0;
    this._neededItemThresholds = [];
    this._effects = [];
    this._setItems = [];
    this._id = e;
    this.addEffect(t);
  }
  XmlEquipmentSetVO.prototype.addEffect = function (e) {
    var t = a.int(e.neededItems || "");
    for (var i = (e.effects || "").split(","), n = 0; n < i.length; n++) {
      if (i[n] != "") {
        var o = i[n].split("&");
        this._effects.push(new s.EquipmentBonusVO().parseEquipmentFromValueString(parseInt(o[0]), o[1]));
        this._neededItemThresholds.push(t);
      }
    }
  };
  XmlEquipmentSetVO.prototype.addItem = function (e) {
    var t = false;
    if (this._setItems != null) {
      for (var i = 0, n = this._setItems; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && (l.instanceOfClass(o, "BasicEquipmentVO") && l.instanceOfClass(e, "BasicEquipmentVO") && o.uniqueID == e.uniqueID || l.instanceOfClass(o, "CastleGemVO") && l.instanceOfClass(e, "CastleGemVO") && o.id == e.id)) {
          t = true;
        }
      }
    }
    if (!t) {
      this._setItems.push(e);
    }
  };
  Object.defineProperty(XmlEquipmentSetVO.prototype, "maxNeededItems", {
    get: function () {
      return this.neededItemThresholds[this.neededItemThresholds.length - 1];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentSetVO.prototype, "name", {
    get: function () {
      if (o.Localize.text("equipment_set_" + this.id).length <= 1) {
        return "QA-TEST-SET";
      } else {
        return o.Localize.text("equipment_set_" + this.id);
      }
    },
    enumerable: true,
    configurable: true
  });
  XmlEquipmentSetVO.prototype.getReachedSetBonusText = function (e) {
    if (!e) {
      return "";
    }
    var t = "";
    var i = e.setCounts;
    if (i.get(this._id)) {
      for (var a = 0; a < this.neededItemThresholds.length; a++) {
        if (i.get(this._id) >= this.neededItemThresholds[a]) {
          var s = this.effects[a].descriptionText;
          t += t.length > 0 ? "\n" : "";
          t += o.Localize.text(n.GenericTextIds.VALUE_ASSIGN_COLON, [this.neededItemThresholds[a], s]);
        }
      }
    }
    return t;
  };
  XmlEquipmentSetVO.prototype.getNotReachedSetBonusText = function (e) {
    if (!e) {
      return this.getSetBonusText();
    }
    var t = "";
    var i = e.setCounts;
    for (var a = 0; a < this.neededItemThresholds.length; a++) {
      if (i.get(this._id) < this.neededItemThresholds[a]) {
        var s = this.effects[a].descriptionText;
        t += t.length > 0 ? "\n" : "";
        t += o.Localize.text(n.GenericTextIds.VALUE_ASSIGN_COLON, [this.neededItemThresholds[a], s]);
      }
    }
    return t;
  };
  XmlEquipmentSetVO.prototype.getSetBonusText = function () {
    var e = "";
    for (var t = 0; t < this.neededItemThresholds.length; t++) {
      var i = this.effects[t].descriptionText;
      e += e.length > 0 ? "\n" : "";
      e += o.Localize.text(n.GenericTextIds.VALUE_ASSIGN_COLON, [this.neededItemThresholds[t], i]);
    }
    return e;
  };
  Object.defineProperty(XmlEquipmentSetVO.prototype, "setItems", {
    get: function () {
      return this._setItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentSetVO.prototype, "neededItemThresholds", {
    get: function () {
      return this._neededItemThresholds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentSetVO.prototype, "effects", {
    get: function () {
      return this._effects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentSetVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  return XmlEquipmentSetVO;
}();
exports.XmlEquipmentSetVO = r;
var l = require("./1.js");