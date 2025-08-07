Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function BasicBuildList() {
    var t = this;
    t._freeSlots = 0;
    t._useableSlots = 0;
    t._slotsInUse = 0;
    t._waitForUpdate = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(BasicBuildList, e);
  BasicBuildList.prototype.parseList = function (e) {};
  BasicBuildList.prototype.executeUpdate = function (e) {};
  BasicBuildList.prototype.switchSlots = function (e, t) {
    var i = this.getSlotByPos(e);
    var n = this.getSlotByPos(t);
    i.pos = t;
    n.pos = e;
  };
  BasicBuildList.prototype.getSlotByPos = function (e) {
    if (this._slots != null) {
      for (var t = 0, i = this._slots; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.pos == e) {
          return n;
        }
      }
    }
    return null;
  };
  Object.defineProperty(BasicBuildList.prototype, "slotsArray", {
    get: function () {
      var e = [];
      if (this._slots != null) {
        for (var t = 0, i = this._slots; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            e.push(n);
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildList.prototype, "numOfSlots", {
    get: function () {
      if (this._slots) {
        return this._slots.length;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildList.prototype, "useableSlots", {
    get: function () {
      return this._useableSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildList.prototype, "slotsInUse", {
    get: function () {
      return this._slotsInUse;
    },
    enumerable: true,
    configurable: true
  });
  BasicBuildList.prototype.hasFreeSlots = function () {
    return this._freeSlots > 0;
  };
  BasicBuildList.prototype.getSlotByArrayPos = function (e) {
    return this._slots[e];
  };
  BasicBuildList.prototype.allSlotsBought = function () {
    return false;
  };
  BasicBuildList.prototype.playerCanBuyNextSlot = function () {
    return false;
  };
  BasicBuildList.prototype.createSlotVO = function () {
    return null;
  };
  BasicBuildList.prototype.getFreshBuildListFromServer = function () {};
  return BasicBuildList;
}(require("./54.js").CastleBasicData);
exports.BasicBuildList = a;
o.classImplementsInterfaces(a, "IUpdatable");