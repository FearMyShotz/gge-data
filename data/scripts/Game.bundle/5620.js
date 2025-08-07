Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./5621.js");
var d = require("./1215.js");
var p = require("./15.js");
var h = require("./54.js");
var g = require("./4.js");
var C = require("./324.js");
var _ = function (e) {
  function DecoStorageData() {
    var t = e.call(this) || this;
    t._storages = new Map();
    t._tempDecos = new Map();
    t._isRequestingGTD = false;
    t.initStorages();
    return t;
  }
  n.__extends(DecoStorageData, e);
  DecoStorageData.prototype.initStorages = function () {
    var e = [s.DecorationConst.GLOBAL_DECORATION_STORAGE_ID, s.DecorationConst.AREA_INVENTORY_STORAGE_ID];
    for (var t = 0; t < DecoStorageData.ADDITIONAL_STORAGE_SPACE_IDS.length; ++t) {
      e.push(s.DecorationConst.getStorageID(DecoStorageData.ADDITIONAL_STORAGE_SPACE_IDS[t]));
    }
    this._storages = new Map();
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          this._storages.set(o, new f.DecoStorageVO(o));
        }
      }
    }
  };
  DecoStorageData.prototype.parseSIN = function (e) {
    if (e) {
      if (e != null) {
        for (var t = 0, i = e; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            var a = c.int(n.SID);
            var s = this.getStorageById(a);
            if (s) {
              s.parseSIN(n);
            } else {
              o.error("DecoStorageData.parseSIN(): unknown storageId was send (" + a + "). Entry ignored.");
            }
          }
        }
      }
      p.CastleBasicController.getInstance().dispatchEvent(new C.DecoStorageEvent(C.DecoStorageEvent.ON_INVENTORY_UPDATED));
    }
  };
  DecoStorageData.prototype.parseGTD = function (e) {
    this._isRequestingGTD = false;
    if (e) {
      if (e != null) {
        var t = undefined;
        for (var i = 0, n = e; i < n.length; i++) {
          var o = n[i];
          if (o !== undefined) {
            var a = c.int(o.AID);
            var s = c.int(o.KID);
            var r = d.AreaHelper.getAreaKey(s, a);
            if (!(t = this._tempDecos.get(r))) {
              t = new m.DecoStorageTempDecoVO();
              this._tempDecos.set(r, t);
            }
            t.parseServerObject(o);
          }
        }
      }
      p.CastleBasicController.getInstance().dispatchEvent(new C.DecoStorageEvent(C.DecoStorageEvent.ON_TEMP_DECOS_UPDATED));
    }
  };
  DecoStorageData.prototype.requestGTD = function () {
    if (!this._isRequestingGTD) {
      this._isRequestingGTD = true;
      g.CastleModel.smartfoxClient.sendCommandVO(new u.C2SGetTargetDecosInAreaEventVO());
    }
  };
  DecoStorageData.prototype.getCurrentStorage = function () {
    var e = g.CastleModel.areaData.activeArea ? s.DecorationConst.getStorageID(g.CastleModel.areaData.activeArea.spaceId) : s.DecorationConst.GLOBAL_DECORATION_STORAGE_ID;
    if (e != s.DecorationConst.GLOBAL_DECORATION_STORAGE_ID) {
      return this.getStorageById(e);
    }
    var t = new f.DecoStorageVO(s.DecorationConst.GLOBAL_DECORATION_STORAGE_ID);
    t.addDecoStorage(this.getStorageById(s.DecorationConst.GLOBAL_DECORATION_STORAGE_ID));
    t.addDecoStorage(this.getStorageById(s.DecorationConst.AREA_INVENTORY_STORAGE_ID));
    return t;
  };
  DecoStorageData.prototype.getMainStorage = function () {
    return this.getStorageById(s.DecorationConst.GLOBAL_DECORATION_STORAGE_ID);
  };
  DecoStorageData.prototype.getTempDecos = function (e, t) {
    return this._tempDecos.get(d.AreaHelper.getAreaKey(t, e));
  };
  DecoStorageData.prototype.getStorageById = function (e) {
    return this._storages.get(e);
  };
  Object.defineProperty(DecoStorageData.prototype, "storages", {
    get: function () {
      return this._storages;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageData.prototype, "isRequestingGTD", {
    get: function () {
      return this._isRequestingGTD;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageData.prototype, "tempDecos", {
    get: function () {
      return this._tempDecos;
    },
    enumerable: true,
    configurable: true
  });
  DecoStorageData.__initialize_static_members = function () {
    DecoStorageData.ADDITIONAL_STORAGE_SPACE_IDS = [r.FactionConst.KINGDOM_ID].concat(l.TreasureMapsConst.CRUSADE_MAP_IDS);
  };
  return DecoStorageData;
}(h.CastleBasicData);
exports.DecoStorageData = _;
var m = require("./5622.js");
var f = require("./5623.js");
a.classImplementsInterfaces(_, "IUpdatable");
_.__initialize_static_members();