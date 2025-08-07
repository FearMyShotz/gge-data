Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = createjs.Rectangle;
var a = createjs.MouseEvent;
var s = require("./135.js");
var r = require("./2.js");
var o = createjs.Container;
var l = require("./136.js");
var u = createjs.Stage;
var c = require("./16.js");
var _ = r.getLogger(c.CREATEJS_UTILITIES_LOGGER);
createjs.Container.prototype;
Object.defineProperty(createjs.Container.prototype, "shape", {
  get: function () {
    if (!this._newshape) {
      this._newshape = new createjs.Shape();
      this.addChild(this._newshape);
    }
    return this._newshape;
  },
  set: function (e) {
    throw new Error("Can't set shape of container");
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Container.prototype, "graphics", {
  get: function () {
    return this.shape.graphics;
  },
  set: function (e) {
    this.shape.graphics = e;
  },
  enumerable: true,
  configurable: true
});
createjs.Container.prototype.addChild = function (e) {
  if (e == null) {
    return e;
  }
  var t = arguments.length;
  if (t > 1) {
    for (var n = 0; n < t; n++) {
      this.addChild(arguments[n]);
    }
    return arguments[t - 1];
  }
  if (e.parent) {
    var i = createjs.indexOf(e.parent.children, e);
    if (i > -1) {
      e.parent.children.splice(i, 1);
      e.parent = null;
    }
  }
  e.parent = this;
  this.children.push(e);
  e.added();
  return e;
};
createjs.Container.prototype.addChildAt = function (e, t) {
  var n = arguments.length;
  var i = arguments[n - 1];
  if (i < 0 || i > this.children.length) {
    return arguments[n - 2];
  }
  if (n > 2) {
    for (var a = 0; a < n - 1; a++) {
      this.addChildAt(arguments[a], i + a);
    }
    return arguments[n - 2];
  }
  if (e.parent) {
    var s = createjs.indexOf(e.parent.children, e);
    if (s > -1) {
      e.parent.children.splice(s, 1);
      e.parent = null;
    }
  }
  e.parent = this;
  this.children.splice(t, 0, e);
  e.added();
  return e;
};
createjs.Container.prototype.removeChildAt = function (e) {
  var t = arguments.length;
  if (t > 1) {
    var n = [];
    for (var i = 0; i < t; i++) {
      n[i] = arguments[i];
    }
    n.sort(function (e, t) {
      return t - e;
    });
    var a = true;
    for (i = 0; i < t; i++) {
      a = a && this.removeChildAt(n[i]);
    }
    return a;
  }
  if (e < 0 || e > this.children.length - 1) {
    return false;
  }
  var s = this.children[e];
  if (s) {
    s.removed();
  }
  this.children.splice(e, 1);
  return true;
};
Object.defineProperty(createjs.Container.prototype, "buttonMode", {
  value: false,
  enumerable: true,
  configurable: true,
  writable: true
});
Object.defineProperty(createjs.Container.prototype, "doubleClickEnabled", {
  value: false,
  enumerable: true,
  configurable: true,
  writable: true
});
Object.defineProperty(createjs.Container.prototype, "tabChildren", {
  value: true,
  enumerable: true,
  configurable: true,
  writable: true
});
Object.defineProperty(createjs.Container.prototype, "tabEnabled", {
  value: true,
  enumerable: true,
  configurable: true,
  writable: true
});
Object.defineProperty(createjs.Container.prototype, "tabIndex", {
  value: -1,
  enumerable: true,
  configurable: true,
  writable: true
});
Object.defineProperty(createjs.Container.prototype, "needsSoftKeyboard", {
  value: false,
  enumerable: true,
  configurable: true,
  writable: true
});
createjs.Container.prototype.dispatchEvent;
createjs.Container.prototype.dispatchEvent = function (e, t) {
  if (e instanceof Event || e instanceof Object) {
    if (e.type === "dblclick" && this.doubleClickEnabled === false) {
      return;
    }
  } else if (e === "dblclick" && this.doubleClickEnabled === false) {
    return;
  }
  if (typeof e == "string") {
    var n = this._listeners;
    if (!n || !n[e]) {
      return true;
    }
    e = new createjs.Event(e);
  } else if (e.target && e.clone) {
    e = e.clone();
  }
  try {
    e.target = t || e.target || this;
  } catch (e) {}
  if (e.bubbles && !e.cancelBubble && this.parent) {
    for (var i = this, a = [i]; i.parent;) {
      a.push(i = i.parent);
    }
    var s = undefined;
    var r = a.length;
    for (s = r - 1; s >= 0 && !e.propagationStopped; s--) {
      a[s]._dispatchEvent(e, 1 + (s === 0 ? 1 : 0));
    }
    for (s = 1; s < r && !e.propagationStopped; s++) {
      a[s]._dispatchEvent(e, 3);
    }
  } else {
    this._dispatchEvent(e, 2);
  }
  return !e.defaultPrevented;
};
createjs.Container.prototype.areInaccessibleObjectsUnderPoint = function (e) {
  _.debug("Container.areInaccessibleObjectsUnderPoint not implemented yet");
  return false;
};
createjs.Container.prototype.stopAllMovieClips = function () {};
createjs.Container.prototype.requestSoftKeyboard = function () {
  return false;
};
createjs.Container.prototype.startTouchDrag = function (e, t = false, n = undefined) {};
createjs.Container.prototype.stopTouchDrag = function (e) {};
createjs.Container.prototype.removeChildren = function () {
  this.removeAllChildren();
};
Object.defineProperty(createjs.Container.prototype, "dropTarget", {
  get: function () {
    return null;
  },
  set: function (e) {
    throw new Error("dropTarget has only getter");
  },
  enumerable: true,
  configurable: true
});
createjs.Container.prototype.getBounds = function (e, t = false) {
  var n = this._getBounds(null, true, t);
  n ||= new i(0, 0, 0, 0);
  if (e && e != this) {
    return this.transformRect(n, e);
  } else {
    return n;
  }
};
o.prototype._getBounds = function (e, t, n = false) {
  var i = this.DisplayObject_getBounds();
  if (i) {
    return this._transformBounds(i, e, t);
  }
  var a = this._props.matrix;
  a = t ? a.identity() : this.getMatrix(a);
  if (e) {
    a.prependMatrix(e);
  }
  var s = this.children.length;
  var r = null;
  this.hitableChildCount = 0;
  var o = n && this.mouseChildren;
  for (var l = 0; l < s; l++) {
    var u = this.children[l];
    if ((!o || !!u.visible) && (!o || !u.children || !!u.children.length) && (!o || !!u.mouseEnabled)) {
      if (i = u._getBounds(a, false, o)) {
        this.hitableChildCount++;
        if (r) {
          r.extend(i.x, i.y, i.width, i.height);
        } else {
          r = i.clone();
        }
      }
    }
  }
  return r;
};
Object.defineProperty(createjs.Container.prototype, "useHandCursor", {
  get: function () {
    return this.cursor == "pointer";
  },
  set: function (e) {
    this.cursor = e ? "pointer" : "default";
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Container.prototype, "loaderInfo", {
  get: function () {
    return new s.LoaderInfo();
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Container.prototype, "mouseX", {
  get: function () {
    if (this.stage) {
      var e = this.getBounds(this.stage);
      var t = 1;
      for (var n = this.parent; n && !(n instanceof u);) {
        t *= n.scaleX;
        n = n.parent;
      }
      return (this.stage.mouseX - e.x) / t;
    }
    return 0;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Container.prototype, "mouseY", {
  get: function () {
    if (this.stage) {
      var e = this.getBounds(this.stage);
      var t = 1;
      for (var n = this.parent; n && !(n instanceof u);) {
        t *= n.scaleY;
        n = n.parent;
      }
      return (this.stage.mouseY - e.y) / t;
    }
    return 0;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Container.prototype, "mousePos", {
  get: function () {
    if (this.stage) {
      return new createjs.Point(this.stage.mouseX - this.x, this.stage.mouseY - this.y);
    } else {
      return new createjs.Point(0, 0);
    }
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.Container.prototype, "centerPoint", {
  get: function () {
    return new createjs.Point(this.x + this.width / 2, this.y + this.height / 2);
  },
  enumerable: true,
  configurable: true
});
createjs.Container.prototype.startDrag = function (e, t) {
  var n = this.x;
  var i = this.y;
  var s = null;
  this.on(a.PRESS_MOVE, function (e) {
    if (s == null) {
      s = {
        x: e.stageX,
        y: e.stageY
      };
    } else {
      var a = s.x - e.stageX;
      var r = -(s.y - e.stageY);
      e.currentTarget.x = Math.min(t.right, Math.max(n - a, t.left));
      e.currentTarget.y = Math.min(t.bottom, Math.max(i + r, t.top));
    }
  });
};
createjs.Container.prototype.startDragWithRotation = function (e, t) {
  var n = e ? this.centerPoint : this.mousePos;
  for (var i = this.parent, s = 0; i;) {
    s += i.rotation;
    i = i.parent;
  }
  var r = s / 180 * Math.PI;
  var o = Math.sin(r);
  var l = Math.cos(r);
  var u = this.x;
  var c = this.y;
  this.on(a.PRESS_MOVE, function (e) {
    var i = e.stageX - n.x;
    var a = -(e.stageY - n.y);
    var s = ~~(i * l - a * o);
    var r = ~~(a * l + i + o);
    e.target.x = Math.min(t.right, Math.max(u + s, t.left));
    e.target.y = Math.min(t.bottom, Math.max(c + r, t.top));
  });
};
createjs.Container.prototype.stopDrag = function () {
  this.removeAllEventListeners(a.PRESS_MOVE);
};
createjs.Container.prototype.uncacheAllChildren = function () {
  function e(t) {
    if (t) {
      for (var n = 0; n < t.numChildren; n++) {
        var i = t.getChildAt(n);
        if (i.filters && i.filters.length > 0) {
          return;
        }
        if (i.cacheCanvas) {
          i.uncache();
        }
        i.x = Math.floor(i.x);
        i.y = Math.floor(i.y);
        if (i instanceof createjs.Container) {
          e(i);
        }
      }
    }
  }
  e(this);
};
createjs.Container.prototype._getObjectsUnderPoint = function (e, t, n, i, a, s) {
  return l.objectsUnderPoint(this, createjs.DisplayObject._hitTestContext, e, t, n, i, a, s);
};
createjs.Container.prototype.__getObjectsUnderPoint = function (e, t, n, i, a, s, r) {
  return l.objectsUnderPoint(this, createjs.DisplayObject._hitTestContext, e, t, n, i, a, s, r);
};
createjs.Container.prototype._tick = function (e) {
  if (this.tickEnabled && this.visible) {
    if (this.tickChildren) {
      for (var t = this.children.length - 1; t >= 0; t--) {
        var n = this.children[t];
        if (n.visible && n.tickEnabled && n._tick) {
          n._tick(e);
        }
      }
    }
    this.DisplayObject__tick(e);
  }
};
createjs.Container.prototype.changeTextFieldCacheScale = function (e) {
  if (this.children && this.children.length > 0) {
    this.children.forEach(function (t) {
      if (t instanceof createjs.TextField) {
        t.defaultCacheScale = e;
      } else if (t instanceof createjs.Container) {
        t.changeTextFieldCacheScale(e);
      }
    });
  }
};
createjs.Container.HIT_BOUNDS_CACHE_FREQUENCY = 333;
createjs.Container.prototype.getHitTestBounds = function (e, t) {
  if (e - this.lastHitTestTime > createjs.Container.HIT_BOUNDS_CACHE_FREQUENCY || !this.lastHitTestBounds) {
    this.lastHitTestTime = e;
    if (this.parent && this.parent.hitableChildCount === 1 && this.parent.lastHitTestBounds) {
      if (!(this.children.length > 0) || !this.mouseEnabled) {
        return new i();
      }
      this.lastHitTestBounds = this.parent.lastHitTestBounds.clone();
    } else {
      this.lastHitTestBounds = this.getBounds(t, true);
    }
  }
  return this.lastHitTestBounds;
};