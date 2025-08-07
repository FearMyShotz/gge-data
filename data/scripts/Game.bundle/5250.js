Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function IsoDataObjects(e) {
    this._groups = new Map();
    this._completeTempObjectList = [];
    this._isCompleteObjectListValid = false;
    this._isoData = e;
    this._provider = new s.IsoDataObjectsProvider(this);
    this._groups = a.IsoHelper.data.createObjectGroupDic(false);
    if (this.groups != null) {
      for (var t = 0, i = Array.from(this.groups.values()); t < i.length; t++) {
        i[t].init(e);
      }
    }
  }
  IsoDataObjects.prototype.invalidateCompleteObjectsList = function () {
    this._isCompleteObjectListValid = false;
    if (this._completeTempObjectList.length > 0) {
      this._completeTempObjectList.length = 0;
    }
  };
  IsoDataObjects.prototype.destroy = function () {
    if (this.groups != null) {
      for (var e = 0, t = Array.from(this.groups.values()); e < t.length; e++) {
        t[e].destroy();
      }
    }
    this._groups = null;
    this._completeTempObjectList = null;
  };
  IsoDataObjects.prototype.getGroupByType = function (e) {
    return this.groups.get(e);
  };
  IsoDataObjects.prototype.getCompleteObjectsList = function () {
    if (!this._isCompleteObjectListValid) {
      if (this.groups != null) {
        for (var e = 0, t = Array.from(this.groups.values()); e < t.length; e++) {
          t[e].fillInCompleteList(this._completeTempObjectList);
        }
      }
      this._isCompleteObjectListValid = true;
    }
    return this._completeTempObjectList;
  };
  Object.defineProperty(IsoDataObjects.prototype, "background", {
    get: function () {
      return this.getGroupByType(o.IsoObjectGroupEnum.BACKGROUND);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "innerBuildings", {
    get: function () {
      return this.getGroupByType(o.IsoObjectGroupEnum.INNER_BUILDINGS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "eventBuildings", {
    get: function () {
      return this.getGroupByType(o.IsoObjectGroupEnum.EVENT_BUILDINGS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "defences", {
    get: function () {
      return this.getGroupByType(o.IsoObjectGroupEnum.DEFENCE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "fixedPositions", {
    get: function () {
      return this.getGroupByType(o.IsoObjectGroupEnum.FIXED_POSITIONS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "groundObjects", {
    get: function () {
      return this.getGroupByType(o.IsoObjectGroupEnum.GROUNDS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "surroundings", {
    get: function () {
      return this.getGroupByType(o.IsoObjectGroupEnum.SURROUNDINGS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "expansions", {
    get: function () {
      return this.getGroupByType(o.IsoObjectGroupEnum.EXPANSIONS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "movements", {
    get: function () {
      return this.getGroupByType(o.IsoObjectGroupEnum.MOVEMENTS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "treasureChests", {
    get: function () {
      return this.getGroupByType(o.IsoObjectGroupEnum.TREASURE_CHESTS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "judgements", {
    get: function () {
      return this.getGroupByType(o.IsoObjectGroupEnum.JUDGEMENTS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "groups", {
    get: function () {
      return this._groups;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "provider", {
    get: function () {
      return this._provider;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "completeTempObjectList", {
    get: function () {
      return this._completeTempObjectList;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDataObjects;
}();
exports.IsoDataObjects = n;
var o = require("./143.js");
var a = require("./46.js");
var s = require("./5251.js");