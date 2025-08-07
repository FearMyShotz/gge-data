Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function UpgradableLandmarkList() {
    this._list = [];
  }
  UpgradableLandmarkList.prototype.getVOByID = function (e) {
    if (this._list != null) {
      for (var t = 0, i = this._list; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.objectId === e) {
          return n;
        }
      }
    }
    return null;
  };
  Object.defineProperty(UpgradableLandmarkList.prototype, "completeList", {
    get: function () {
      return this._list;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkList.prototype, "amount", {
    get: function () {
      if (this._list) {
        return this._list.length;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  UpgradableLandmarkList.prototype.getLandmarkBonus = function (e = -1) {
    var t = 0;
    if (this._list != null) {
      for (var i = 0, n = this._list; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          if (e == -1 || o.kingdomID == e) {
            if (t < o.landmarkBonus) {
              t = o.landmarkBonus;
            }
          }
        }
      }
    }
    return t;
  };
  Object.defineProperty(UpgradableLandmarkList.prototype, "controller", {
    get: function () {
      return o.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return UpgradableLandmarkList;
}();
exports.UpgradableLandmarkList = n;
var o = require("./15.js");