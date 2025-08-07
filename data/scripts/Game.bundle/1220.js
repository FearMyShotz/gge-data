Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Container;
var o = createjs.Point;
var a = function () {
  function VisualMapElement() {
    this.deathTime = NaN;
    this.isDying = false;
    this._isMutable = false;
    this._hidden = false;
    this._lastUpdateTimestamp = NaN;
  }
  Object.defineProperty(VisualMapElement.prototype, "uiBounds", {
    get: function () {
      if (this.disp) {
        return this.disp.getBounds(null);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "uiPos", {
    get: function () {
      if (this.disp) {
        return new o(this.disp.x, this.disp.y);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "uiDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  VisualMapElement.prototype.initialize = function (e, t) {
    this.vo = e;
    this.worldmapRenderer = t;
    this._visClassName = this.name + "_" + this.group + "_" + this.type;
    this.deathTime = Number.MAX_VALUE;
    this.isDying = false;
    this.initVisualRep();
    if (this.disp) {
      this.visualX = this.initialX;
      this.visualY = this.initialY;
    }
  };
  VisualMapElement.prototype.initVisualRep = function () {
    if (this.disp == null) {
      this.disp = new n();
    }
  };
  VisualMapElement.prototype.show = function () {
    this._hidden = false;
    if (this.disp) {
      this.disp.visible = true;
    }
  };
  VisualMapElement.prototype.hide = function () {
    this._hidden = true;
    if (this.disp) {
      this.disp.visible = false;
    }
  };
  VisualMapElement.prototype.update = function (e) {
    this.updateVisualRep(e);
    this._lastUpdateTimestamp = e;
  };
  VisualMapElement.prototype.updateVisualRep = function (e) {};
  Object.defineProperty(VisualMapElement.prototype, "hidden", {
    get: function () {
      return this._hidden;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "initialX", {
    get: function () {
      return this.vo.x;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "initialY", {
    get: function () {
      return this.vo.y;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "visualX", {
    get: function () {
      return this.disp.x;
    },
    set: function (e) {
      this.disp.x = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "visualY", {
    get: function () {
      return this.disp.y;
    },
    set: function (e) {
      this.disp.y = e;
    },
    enumerable: true,
    configurable: true
  });
  VisualMapElement.prototype.die = function (e = -1) {
    if (!this.isDying) {
      this.isDying = true;
      var t = s.int(r.CachedTimer.getCachedTimer());
      this.deathTime = e < 0 ? t : e;
      if (this.deathTime <= t) {
        this.hide();
      }
    }
  };
  VisualMapElement.prototype.isDead = function (e) {
    return e > this.deathTime;
  };
  VisualMapElement.prototype.remove = function () {};
  Object.defineProperty(VisualMapElement.prototype, "x", {
    get: function () {
      return this.vo.x;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "y", {
    get: function () {
      return this.vo.y;
    },
    enumerable: true,
    configurable: true
  });
  VisualMapElement.prototype.addDispToLayer = function (e, t = -1) {
    if (this.disp) {
      this._dispLayer = e;
      if (t == -1) {
        this._dispLayer.addChild(this.disp);
      } else {
        this._dispLayer.addChildAt(this.disp, t);
      }
    }
  };
  VisualMapElement.prototype.removeDispFromWorld = function () {
    if (this.disp) {
      if (this._dispLayer) {
        this._dispLayer.removeChild(this.disp);
        this._dispLayer = null;
      }
      this.disp = null;
    }
  };
  VisualMapElement.prototype.addDispChild = function (e) {
    if (this.disp && e && e.parent != this.disp) {
      this.disp.addChild(e);
    }
  };
  VisualMapElement.prototype.addDispChildAt = function (e, t) {
    if (this.disp && e && e.parent != this.disp && t <= this.disp.numChildren) {
      this.disp.addChildAt(e, t);
    }
  };
  VisualMapElement.prototype.removeDispChild = function (e) {
    if (this.disp && e && e.parent == this.disp) {
      this.disp.removeChild(e);
    }
  };
  VisualMapElement.prototype.getDispChildAt = function (e) {
    if (this.disp && this.disp.numChildren > e) {
      return this.disp.getChildAt(e);
    } else {
      return null;
    }
  };
  VisualMapElement.prototype.removeDispChildAt = function (e) {
    if (this.disp && this.disp.numChildren > e) {
      this.disp.removeChildAt(e);
    }
  };
  VisualMapElement.prototype.toString = function () {
    return this.name + "_" + this.group + "_" + this.type;
  };
  Object.defineProperty(VisualMapElement.prototype, "isHidden", {
    get: function () {
      return this.disp.visible == 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "useBitmapCache", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "isMutable", {
    get: function () {
      return this._isMutable;
    },
    set: function (e) {
      this._isMutable = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "name", {
    get: function () {
      return this.vo.name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "group", {
    get: function () {
      return this.vo.group;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "type", {
    get: function () {
      return this.vo.type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "scale", {
    get: function () {
      if (this.disp) {
        return this.disp.scaleX;
      } else {
        return 0;
      }
    },
    set: function (e) {
      if (this.scale != e) {
        this.disp.scaleX = this.disp.scaleY = e;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "alpha", {
    get: function () {
      if (this.disp) {
        return this.disp.alpha;
      } else {
        return 1;
      }
    },
    set: function (e) {
      if (this.disp) {
        this.disp.alpha = e;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "cacheAsBitmap", {
    set: function (e) {
      if (this.disp) {
        this.disp.cacheAsBitmap = e;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "filters", {
    get: function () {
      if (this.disp) {
        return this.disp.filters;
      } else {
        return null;
      }
    },
    set: function (e) {
      if (this.disp) {
        this.disp.useFilters(e);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "currentVisWidth", {
    get: function () {
      if (this.disp) {
        return this.disp.width;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "currentVisHeight", {
    get: function () {
      if (this.disp) {
        return this.disp.height;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "rotation", {
    get: function () {
      if (this.disp) {
        return this.disp.rotation;
      } else {
        return 0;
      }
    },
    set: function (e) {
      if (this.disp) {
        this.disp.rotation = e;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "graphics", {
    get: function () {
      if (this.disp) {
        return this.disp.graphics;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "lastVisualUpdate", {
    get: function () {
      return this._lastUpdateTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "visClassName", {
    get: function () {
      return this.vo.getVisualClassName();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "objectID", {
    get: function () {
      return this.vo.objectId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "wodId", {
    get: function () {
      return this.vo.wodId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VisualMapElement.prototype, "visualVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return VisualMapElement;
}();
exports.VisualMapElement = a;
var s = require("./6.js");
var r = require("./30.js");