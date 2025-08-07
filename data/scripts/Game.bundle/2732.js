Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function IsoViewObjectsProvider(e) {
    this._objects = e;
  }
  IsoViewObjectsProvider.prototype.getObjectsByGroupType = function (e = null) {
    if (e) {
      var t = [];
      var i = this.objects.getGroupByType(e);
      if (i) {
        if (a.instanceOfClass(i, "AIsoViewObjectGroupSimpleList")) {
          t = i.list;
        } else {
          i.fillInCompleteList(t);
        }
        return t;
      } else {
        return t;
      }
    }
    return this.objects.getCompleteObjectsList();
  };
  IsoViewObjectsProvider.prototype.getObjectByVO = function (e) {
    if (!e) {
      return null;
    }
    for (var t = 0, i = this.getObjectsByGroupType(); t < i.length; t++) {
      var n = i[t];
      if (n && n.vo == e) {
        return n;
      }
    }
    return null;
  };
  IsoViewObjectsProvider.prototype.getObjectById = function (e) {
    if (e < 0) {
      return null;
    }
    for (var t = 0, i = this.getObjectsByGroupType(); t < i.length; t++) {
      var n = i[t];
      if (n && n.vo && n.vo.objectId == e) {
        return n;
      }
    }
    return null;
  };
  IsoViewObjectsProvider.prototype.getObjectByClass = function (e) {
    for (var t = 0, i = this.getObjectsByGroupType(); t < i.length; t++) {
      var n = i[t];
      if (a.instanceOfClass(n, o.getQualifiedClassName(e))) {
        return n;
      }
    }
    return null;
  };
  IsoViewObjectsProvider.prototype.getObjectByType = function (e) {
    for (var t = 0, i = this.objects.getCompleteObjectsList(); t < i.length; t++) {
      var n = i[t];
      if (n.vo && n.vo.objectType == e) {
        return n;
      }
    }
    return null;
  };
  Object.defineProperty(IsoViewObjectsProvider.prototype, "objects", {
    get: function () {
      return this._objects;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewObjectsProvider;
}();
exports.IsoViewObjectsProvider = n;
var o = require("./1.js");
var a = require("./1.js");