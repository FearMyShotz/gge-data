Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleKingstowerList() {
    this._kingstowerList = [];
  }
  CastleKingstowerList.prototype.parseGKL = function (e) {
    if (e) {
      this._kingstowerList = [];
      for (var t = 0, i = e.AI; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var s = new o.KingstowerMapobjectVO();
          s.parseGKL(n);
          s.ownerInfo = r.CastleModel.otherPlayerData.getOwnInfoVO();
          this._kingstowerList.push(s);
        }
      }
      this.controller.dispatchEvent(new a.CastleUserDataEvent(a.CastleUserDataEvent.CHANGE_KINGSTOWERLIST));
    }
  };
  CastleKingstowerList.prototype.getVOByID = function (e) {
    if (this._kingstowerList != null) {
      for (var t = 0, i = this._kingstowerList; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.objectId === e) {
          return n;
        }
      }
    }
    return null;
  };
  Object.defineProperty(CastleKingstowerList.prototype, "completeList", {
    get: function () {
      return this._kingstowerList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingstowerList.prototype, "kingstowerAmount", {
    get: function () {
      if (this._kingstowerList) {
        return this._kingstowerList.length;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingstowerList.prototype, "controller", {
    get: function () {
      return s.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleKingstowerList;
}();
exports.CastleKingstowerList = n;
var o = require("./508.js");
var a = require("./32.js");
var s = require("./15.js");
var r = require("./4.js");