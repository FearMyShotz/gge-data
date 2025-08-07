Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function IsoCommandPackageObjectUpdateInfo(t, i) {
    var n = e.call(this, null) || this;
    n._isoData = t;
    n._serverObject = i;
    return n;
  }
  n.__extends(IsoCommandPackageObjectUpdateInfo, e);
  IsoCommandPackageObjectUpdateInfo.prototype.createCommandList = function () {
    var e = [];
    var t = s.IsoHelper.data.createIsoObjectVOByServer(this.createCopyFromServerObject(), this.isoData);
    if (t && t.objectId >= 0) {
      if (this.doesObjectHasToBeCreated(t.objectId)) {
        this.vo = s.IsoHelper.data.createIsoObjectVOByServer(this.getRealServerObject(), this.isoData);
        e.push(new r.IsoCommandObjectAddModel(this.vo.isoData, this.vo, true), new u.IsoCommandObjectUpdateConstructionItems(this.vo.isoData, this.vo));
        if (this.vo.objectType.groupType.needsAdvancedUpdates) {
          e.push(new p.IsoCommandAreaDataUpdated(this.vo.isoData));
        }
        e.push(new l.IsoCommandObjectAddView(this.vo), new h.IsoCommandZSortAll());
      } else {
        e.push(new d.IsoCommandObjectUpdateInfoModel(t.isoData, t.objectId, this.getRealServerObject()), new u.IsoCommandObjectUpdateConstructionItems(t.isoData, t));
        if (t.objectType.groupType.needsAdvancedUpdates) {
          e.push(new p.IsoCommandAreaDataUpdated(t.isoData));
        }
        e.push(new c.IsoCommandObjectUpdateByIdView(t.objectId, this.wasFastCompleted), new h.IsoCommandZSortAll());
      }
    } else {
      o.debug("--- The given serverObject is invalid.");
    }
    return e;
  };
  IsoCommandPackageObjectUpdateInfo.prototype.doesObjectHasToBeCreated = function (e) {
    for (var t = 0, i = Array.from(this.isoData.objects.groups.values()); t < i.length; t++) {
      var n = i[t];
      if (n !== undefined && n.containsObjectById(e)) {
        return false;
      }
    }
    return true;
  };
  IsoCommandPackageObjectUpdateInfo.prototype.createCopyFromServerObject = function () {
    var e = [];
    for (var t = this.getRealServerObject(), i = 0; i < t.length; ++i) {
      e[i] = t[i];
    }
    return e;
  };
  IsoCommandPackageObjectUpdateInfo.prototype.getRealServerObject = function () {
    if (this.serverObject.O) {
      return this.serverObject.O;
    } else {
      return this.serverObject;
    }
  };
  Object.defineProperty(IsoCommandPackageObjectUpdateInfo.prototype, "wasFastCompleted", {
    get: function () {
      return !!this.serverObject && this.serverObject.F == 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoCommandPackageObjectUpdateInfo.prototype, "serverObject", {
    get: function () {
      return this._serverObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoCommandPackageObjectUpdateInfo.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandPackageObjectUpdateInfo;
}(require("./634.js").AIsoCommandPackageObject);
exports.IsoCommandPackageObjectUpdateInfo = a;
var s = require("./46.js");
var r = require("./693.js");
var l = require("./694.js");
var c = require("./5242.js");
var u = require("./1948.js");
var d = require("./5243.js");
var p = require("./485.js");
var h = require("./691.js");