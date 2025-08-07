Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./547.js");
var a = require("./224.js");
var s = require("./548.js");
var r = createjs.MovieClip;
Object.defineProperty(createjs.MovieClip.prototype, "enabled", {
  get: function () {
    if (this.$enabled === undefined) {
      this.$enabled = true;
    }
    return this.$enabled;
  },
  set: function (e) {
    this.$enabled = e;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.MovieClip.prototype, "framesLoaded", {
  get: function () {
    return this.totalFrames;
  },
  enumerable: true,
  configurable: true
});
createjs.MovieClip.prototype._getBounds = function (e, t, n = false) {
  var i = this.DisplayObject_getBounds();
  if (!i && this.timeline.duration > 0) {
    this._updateTimeline(this.timeline.rawPosition);
    if (this.frameBounds) {
      i = this._rectangle.copy(this.frameBounds[this.currentFrame]);
    }
  }
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
var o = createjs.MovieClip.prototype._goto;
createjs.MovieClip.prototype._goto = function (e) {
  if (Number.isInteger(e) && e > 0) {
    --e;
  }
  o.apply(this, [e]);
};
var l = createjs.MovieClip.prototype.advance;
createjs.MovieClip.prototype.advance = function (e) {
  this.framerate ||= 24;
  var t = this.currentFrame;
  if (this.visible && !this.paused && this.totalFrames > 1) {
    l.apply(this, [e]);
  }
  if (t != this.currentFrame && this.framerate != 24) {
    for (var n = 0; n < this.numChildren; n++) {
      if (this.children[n] instanceof r) {
        this.children[n].framerate = this.framerate;
      }
    }
  }
};
createjs.MovieClip.prototype._defineMask = function () {
  if (!this._maskInstructions) {
    this._maskInstructions = {};
    this._maskShape = new createjs.Shape();
    this._maskBounds = {};
  }
};
createjs.MovieClip.prototype._addChildToMask = function (e) {
  var t = e.constructor.__fname || e.constructor.name;
  if (i.definedMasks[t]) {
    this._maskInstructions[t] = i.definedMasks[t];
    this._maskBounds[t] = a.getDisplayObjectBounds(e);
    return;
  }
  if (this._maskInstructions) {
    this._maskInstructions[e.id] = s.getGraphicsInstructions(e);
  }
  if (this._maskBounds) {
    this._maskBounds[e.id] = a.getDisplayObjectBounds(e);
  }
};
createjs.MovieClip.prototype._removeChildFromMask = function (e) {
  var t = e.constructor.__fname || e.constructor.name;
  var n = i.definedMasks[t] ? t : e.id;
  if (this._maskInstructions) {
    delete this._maskInstructions[n];
  }
  if (this._maskInstructions) {
    delete this._maskBounds[n];
  }
};
createjs.MovieClip.prototype._generateShapeOfChildren = function () {
  var e = this;
  this._clearMask();
  this.children.forEach(function (t) {
    e._addChildToMask(t);
  });
  return this;
};
createjs.MovieClip.prototype._updateMaskBounds = function () {
  var e;
  this._maskShape.setBounds(0, 0, 0, 0);
  for (var t in this._maskBounds) {
    e = this._maskBounds[t];
    this._maskShape.graphics.bounds.setValues(Math.min(this._maskShape.graphics.bounds.x, e.x), Math.min(this._maskShape.graphics.bounds.y, e.y), Math.max(this._maskShape.graphics.bounds.width, e.width), Math.max(this._maskShape.graphics.bounds.height, e.height));
  }
};
createjs.MovieClip.prototype._redrawMask = function () {
  var e;
  var t = this;
  this._clearMask();
  if (this._maskInstructions && Object.keys(this._maskInstructions).length) {
    this._maskShape.graphics.f("red");
    for (var n in this._maskInstructions) {
      if ((e = this._maskInstructions[n]).p) {
        this._maskShape.graphics.p(e.p, e.x, e.y);
      } else if (e instanceof Array) {
        e.forEach(function (e) {
          t._maskShape.graphics.append(e);
        });
      }
    }
    this._maskShape.x = this.x;
    this._maskShape.y = this.y;
  } else {
    this._maskShape.graphics.f("red").r(0, 0, 0, 0);
  }
  this._updateMaskBounds();
  return this._maskShape;
};
createjs.MovieClip.prototype._clearMask = function () {
  if (this._maskShape) {
    this._maskShape.graphics.clear();
  }
};
createjs.MovieClip.prototype._createMaskShape = function () {
  this._defineMask();
  this._generateShapeOfChildren();
  this._redrawMask();
  return this._maskShape;
};
Object.defineProperty(createjs.MovieClip.prototype, "maskShape", {
  configurable: true,
  enumerable: true,
  get: function () {
    return this._maskShape;
  },
  set: function (e) {
    throw new Error("Can't set maskShape of MovieClip");
  }
});
Object.defineProperty(createjs.MovieClip.prototype, "usedAsMask", {
  configurable: true,
  enumerable: true,
  get: function () {
    this._defineMask();
    return Boolean(this._usedAsMask);
  },
  set: function (e) {
    this._usedAsMask = e;
  }
});
createjs.MovieClip.prototype.addChild = function (e) {
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
  if (this.usedAsMask) {
    this._addChildToMask(e);
    this._redrawMask();
  }
  return e;
};
createjs.MovieClip.prototype.addChildAt = function (e, t) {
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
  if (this.usedAsMask) {
    this._addChildToMask(e);
    this._redrawMask();
  }
  return e;
};
createjs.MovieClip.prototype.removeChildAt = function (e) {
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
    if (this.usedAsMask) {
      this._removeChildFromMask(s);
      this._redrawMask();
    }
    s.removed();
  }
  this.children.splice(e, 1);
  return true;
};