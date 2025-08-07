Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./488.js");
var s = require("./2733.js");
var r = function (e) {
  function IsoViewObjects() {
    var t = this;
    t._groups = new Map();
    t._isoLayerObjects = [];
    t._completeTempObjectList = [];
    t._isCompleteObjectListValid = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._provider = new s.IsoViewObjectsProvider(t);
    t._groups = c.IsoHelper.data.createObjectGroupDic(true);
    return t;
  }
  n.__extends(IsoViewObjects, e);
  IsoViewObjects.prototype.init = function (t) {
    e.prototype.init.call(this, t);
    if (this.groups != null) {
      for (var i = 0, n = Array.from(this.groups.values()); i < n.length; i++) {
        n[i].init(t);
      }
    }
  };
  IsoViewObjects.prototype.reset = function () {
    e.prototype.reset.call(this);
    this.invalidateCompleteObjectsList();
    this._isoLayerObjects.length = 0;
  };
  IsoViewObjects.prototype.setup = function () {
    e.prototype.setup.call(this);
    if (this.groups != null) {
      for (var t = 0, i = Array.from(this.groups.values()); t < i.length; t++) {
        i[t].initObjects();
      }
    }
    this.invalidateCompleteObjectsList();
  };
  IsoViewObjects.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._isoLayerObjects.length = 0;
    if (this.groups != null) {
      for (var t = 0, i = Array.from(this.groups.values()); t < i.length; t++) {
        i[t].destroy();
      }
    }
    this.invalidateCompleteObjectsList();
  };
  IsoViewObjects.prototype.render = function (e = false) {
    if (this.groups != null) {
      for (var t = 0, i = Array.from(this.groups.values()); t < i.length; t++) {
        i[t].render(e);
      }
    }
  };
  IsoViewObjects.prototype.getGroupByType = function (e) {
    return this._groups.get(e);
  };
  IsoViewObjects.prototype.invalidateCompleteObjectsList = function () {
    this._isCompleteObjectListValid = false;
    if (this._completeTempObjectList.length > 0) {
      this._completeTempObjectList = [];
    }
  };
  IsoViewObjects.prototype.getCompleteObjectsList = function () {
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
  Object.defineProperty(IsoViewObjects.prototype, "background", {
    get: function () {
      return this.getGroupByType(l.IsoObjectGroupEnum.BACKGROUND);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "innerBuildings", {
    get: function () {
      return this.getGroupByType(l.IsoObjectGroupEnum.INNER_BUILDINGS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "eventBuildings", {
    get: function () {
      return this.getGroupByType(l.IsoObjectGroupEnum.EVENT_BUILDINGS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "defenceObjects", {
    get: function () {
      return this.getGroupByType(l.IsoObjectGroupEnum.DEFENCE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "fixedPositions", {
    get: function () {
      return this.getGroupByType(l.IsoObjectGroupEnum.FIXED_POSITIONS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "groundObjects", {
    get: function () {
      return this.getGroupByType(l.IsoObjectGroupEnum.GROUNDS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "surroundings", {
    get: function () {
      return this.getGroupByType(l.IsoObjectGroupEnum.SURROUNDINGS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "effects", {
    get: function () {
      return this.getGroupByType(l.IsoObjectGroupEnum.EFFECTS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "expansions", {
    get: function () {
      return this.getGroupByType(l.IsoObjectGroupEnum.EXPANSIONS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "floorMarks", {
    get: function () {
      return this.getGroupByType(l.IsoObjectGroupEnum.FLOOR_MARKS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "movements", {
    get: function () {
      return this.getGroupByType(l.IsoObjectGroupEnum.MOVEMENTS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "judgements", {
    get: function () {
      return this.getGroupByType(l.IsoObjectGroupEnum.JUDGEMENTS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "groups", {
    get: function () {
      return this._groups;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "isoLayerObjects", {
    get: function () {
      return this._isoLayerObjects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "provider", {
    get: function () {
      return this._provider;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewObjects;
}(a.AIsoViewComponent);
exports.IsoViewObjects = r;
var l = require("./143.js");
var c = require("./46.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");