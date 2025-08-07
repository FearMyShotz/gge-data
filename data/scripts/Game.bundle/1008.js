Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AIsoViewObjectGroup() {}
  AIsoViewObjectGroup.prototype.init = function (e) {
    this._isoRenderer = e;
  };
  AIsoViewObjectGroup.prototype.destroy = function () {};
  AIsoViewObjectGroup.prototype.initObjects = function () {};
  AIsoViewObjectGroup.prototype.render = function (e = false) {};
  AIsoViewObjectGroup.prototype.addObject = function (e) {};
  AIsoViewObjectGroup.prototype.removeObjectByVE = function (e) {};
  AIsoViewObjectGroup.prototype.isObjectForThisList = function (e) {
    return e.objectType.groupType == this.groupType;
  };
  AIsoViewObjectGroup.prototype.containsObject = function (e) {
    return false;
  };
  AIsoViewObjectGroup.prototype.fillInCompleteList = function (e) {};
  AIsoViewObjectGroup.prototype.destroyObject = function (e) {
    if (e) {
      if (e.getVELayerType() == u.IsoLayerEnum.ISO_OBJECTS) {
        var t = this.isoRenderer.objects.isoLayerObjects;
        if (t.length > 0) {
          var i = c.int(t.indexOf(e));
          if (i >= 0) {
            t.splice(i, 1);
          }
        }
      }
      e.destroy();
    }
    return null;
  };
  AIsoViewObjectGroup.prototype.destroyAndCreateNewObjectList = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this.destroyObject(n);
        }
      }
    }
    if (l.instanceOfClass(e, "Array")) {
      return [];
    } else {
      return new (r.ClientConstUtils.getClassFromObject(e))();
    }
  };
  AIsoViewObjectGroup.prototype.createObjectsAndAddToLayerAndList = function (e, t) {
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          this.createObjectAndAddToLayerAndList(o, t);
        }
      }
    }
  };
  AIsoViewObjectGroup.prototype.createObjectAndAddToLayerAndList = function (e, t) {
    var i = this.createObjectAndAddToLayer(e);
    if (i) {
      t.push(i);
      this.isoRenderer.objects.invalidateCompleteObjectsList();
      return i;
    } else {
      return null;
    }
  };
  AIsoViewObjectGroup.prototype.createObjectAndAddToLayer = function (e) {
    if (!e) {
      return null;
    }
    var t = s.IsoHelper.view.createIsoObjectVEFromVO(e);
    if (t) {
      if (!e.isoData) {
        e.init(o.Iso.data);
      }
      this.addObjectToLayer(t);
      return t;
    } else {
      return null;
    }
  };
  AIsoViewObjectGroup.prototype.addObjectToLayerAndList = function (e, t) {
    if (e) {
      this.addObjectToLayer(e);
      t.push(e);
      return e;
    } else {
      return null;
    }
  };
  AIsoViewObjectGroup.prototype.addObjectToLayer = function (e) {
    if (!e) {
      return null;
    }
    if (e.vo && e.vo.isInBuildingDistrict) {
      return null;
    }
    var t = e.getVELayerType();
    var i = this.isoRenderer.layers.getIsoLayer(t);
    if (i) {
      i.addChild(e.elementContainer);
    } else {
      console.warn("Couldn't add disp to layer. -> Layer not found.");
    }
    this.isoRenderer.objects.invalidateCompleteObjectsList();
    if (t == u.IsoLayerEnum.ISO_OBJECTS) {
      this.isoRenderer.objects.isoLayerObjects.push(e);
      o.Iso.controller.processor.executeCommand(new a.IsoCommandZSortObject(e));
    }
    return e;
  };
  AIsoViewObjectGroup.prototype.removeObjectFromList = function (e, t) {
    if (t) {
      var i = c.int(t.indexOf(e));
      if (i >= 0) {
        this.destroyObject(e);
        t.splice(i, 1);
      }
    }
  };
  Object.defineProperty(AIsoViewObjectGroup.prototype, "isoData", {
    get: function () {
      return this.isoRenderer.isoData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoViewObjectGroup.prototype, "isoRenderer", {
    get: function () {
      return this._isoRenderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoViewObjectGroup.prototype, "groupType", {
    get: function () {
      return this._groupType;
    },
    set: function (e) {
      this._groupType = e;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoViewObjectGroup;
}();
exports.AIsoViewObjectGroup = n;
var o = require("./33.js");
var a = require("./486.js");
var s = require("./46.js");
var r = require("./55.js");
var l = require("./1.js");
var c = require("./6.js");
var u = require("./113.js");