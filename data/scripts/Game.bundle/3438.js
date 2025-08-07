Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./3439.js");
var l = function (e) {
  function EquipmentExpiredDialogProperties(t) {
    var i = e.call(this) || this;
    i._generals = [];
    i._barons = [];
    i._lordList = [];
    i._numberOfLords = 0;
    i._numberOfEquipments = 0;
    i.parseData(t);
    return i;
  }
  n.__extends(EquipmentExpiredDialogProperties, e);
  EquipmentExpiredDialogProperties.prototype.parseData = function (e) {
    this._generals = [];
    this._barons = [];
    this._lordList = [];
    this._numberOfLords = 0;
    this._numberOfEquipments = 0;
    for (var t = 0; t < e[a.CommKeys.COMMANDERS].length; ++t) {
      var i = new r.ExpiredEquipmentVO();
      i.parseData(e[a.CommKeys.COMMANDERS][t]);
      this._generals.push(i);
    }
    for (t = 0; t < e.B.length; ++t) {
      (i = new r.ExpiredEquipmentVO()).parseData(e.B[t]);
      this._barons.push(i);
    }
    for (var n = 0, o = this._generals; n < o.length; n++) {
      i = o[n];
      this.lordList.push(i.lordVO);
    }
    for (var l = 0, c = this._barons; l < c.length; l++) {
      i = c[l];
      this.lordList.push(i.lordVO);
    }
    this._numberOfLords = s.int(this._generals.length + this._barons.length);
    for (var u = 0, d = this._generals; u < d.length; u++) {
      i = d[u];
      this._numberOfEquipments += s.int(i.equipments.length);
    }
    for (var p = 0, h = this._barons; p < h.length; p++) {
      i = h[p];
      this._numberOfEquipments += s.int(i.equipments.length);
    }
  };
  EquipmentExpiredDialogProperties.prototype.getExpiredEquipmentVOByLord = function (e) {
    if (this._generals != null) {
      for (var t = 0, i = this._generals; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.lordVO.id == e) {
          return n;
        }
      }
    }
    for (var o = 0, a = this._barons; o < a.length; o++) {
      if ((n = a[o]).lordVO.id == e) {
        return n;
      }
    }
    return null;
  };
  Object.defineProperty(EquipmentExpiredDialogProperties.prototype, "generals", {
    get: function () {
      return this._generals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentExpiredDialogProperties.prototype, "barons", {
    get: function () {
      return this._barons;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentExpiredDialogProperties.prototype, "lordList", {
    get: function () {
      return this._lordList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentExpiredDialogProperties.prototype, "numberOfLords", {
    get: function () {
      return this._numberOfLords;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentExpiredDialogProperties.prototype, "numberOfEquipments", {
    get: function () {
      return this._numberOfEquipments;
    },
    enumerable: true,
    configurable: true
  });
  return EquipmentExpiredDialogProperties;
}(o.BasicProperties);
exports.EquipmentExpiredDialogProperties = l;