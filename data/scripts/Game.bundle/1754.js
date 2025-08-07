Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = function (e) {
  function PrivateEventEnum(t, i, n, a, s, r, l, c, u, d) {
    var p = e.call(this, t, o.BasicEnum.instantiationKey) || this;
    p._privateEventID = 0;
    p._minLevel = 0;
    p._maxLevel = 0;
    p._openWithLogin = false;
    p._privateEventID = i;
    p._privateEventClass = n;
    p._eventType = a;
    p._minLevel = s;
    p._maxLevel = r;
    p._openWithLogin = l;
    p._kIDs = c;
    p._areaTypes = u;
    p._mapIDs = d;
    return p;
  }
  n.__extends(PrivateEventEnum, e);
  PrivateEventEnum.getPrivateEventTypeFromName = function (e) {
    return this.getByProperty(PrivateEventEnum, "name", e, PrivateEventEnum.UNDEFINED);
  };
  Object.defineProperty(PrivateEventEnum.prototype, "privateEventID", {
    get: function () {
      return this._privateEventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateEventEnum.prototype, "privateEventClass", {
    get: function () {
      return this._privateEventClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateEventEnum.prototype, "eventType", {
    get: function () {
      return this._eventType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateEventEnum.prototype, "minLevel", {
    get: function () {
      return this._minLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateEventEnum.prototype, "maxLevel", {
    get: function () {
      return this._maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateEventEnum.prototype, "openWithLogin", {
    get: function () {
      return this._openWithLogin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateEventEnum.prototype, "kIDs", {
    get: function () {
      return this._kIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateEventEnum.prototype, "areaTypes", {
    get: function () {
      return this._areaTypes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateEventEnum.prototype, "mapIDs", {
    get: function () {
      return this._mapIDs;
    },
    enumerable: true,
    configurable: true
  });
  PrivateEventEnum.__initialize_static_members = function () {
    PrivateEventEnum.UNDEFINED = new PrivateEventEnum("undefined", 0, r.ASpecialEventVO, "", 6, 99, false, [], [], []);
    PrivateEventEnum.LOW_LEVEL_UNIT_DEALER = new PrivateEventEnum("unitDealer", 100, l.PrivateUnitDealerEventVO, "UnitDealer", a.TreasureMapsConst.LOWLEVEL_UNDERWORLD_START_LEVEL, a.TreasureMapsConst.LOWLEVEL_UNDERWORLD_KILL_LEVEL, false, [0], [8], [30]);
  };
  return PrivateEventEnum;
}(o.BasicEnum);
exports.PrivateEventEnum = s;
var r = require("./79.js");
var l = require("./999.js");
s.__initialize_static_members();