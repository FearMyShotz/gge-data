Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./18.js");
var s = require("./16.js");
var r = require("./53.js");
var l = require("./799.js");
var c = createjs.Point;
var u = function (e) {
  function ConnectionMapObject() {
    var t = e.call(this) || this;
    t.lineColor = 0;
    t.g = t.graphics;
    t.reset();
    t.mouseChildren = false;
    t.mouseEnabled = false;
    return t;
  }
  n.__extends(ConnectionMapObject, e);
  ConnectionMapObject.prototype.hide = function () {
    this.visible &&= false;
    this.g.clear();
  };
  ConnectionMapObject.prototype.show = function () {
    this.visible ||= true;
  };
  ConnectionMapObject.prototype.reset = function () {
    this.sourceAreaPos = null;
    this.originPos = null;
    this.connectionAreas = [];
    this.relativeTargetPositions = [];
    this.relativeSourcePosition = null;
    this.hide();
  };
  Object.defineProperty(ConnectionMapObject.prototype, "sourceAreaPos", {
    get: function () {
      return this._sourceAreaPos;
    },
    set: function (e) {
      this._sourceAreaPos = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConnectionMapObject.prototype, "connectionAreas", {
    set: function (e) {
      this._connectionAreas = e;
    },
    enumerable: true,
    configurable: true
  });
  ConnectionMapObject.prototype.showLines = function (e, t, i, n = true) {
    this._sourceAreaPos = e;
    this._connectionAreas = t;
    this.lineColor = i;
    if (this._sourceAreaPos && this._connectionAreas && this._connectionAreas.length > 0) {
      this.calculateRelativePositions();
      this.drawAndShow(n);
    } else {
      this.hide();
    }
  };
  ConnectionMapObject.prototype.drawAndShow = function (e = true) {
    var t = r.ABGHelper.isOnABGServer ? 10 : 5;
    if (e) {
      this.g.clear();
    }
    this.g.lineStyle(t, this.lineColor, 1);
    if (this.relativeTargetPositions != null) {
      for (var i = 0, n = this.relativeTargetPositions; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = o[0];
          var l = o.length > 1 ? o[1] : this.lineColor;
          if (l == s.ClientConstColor.COLORBLIND_RED) {
            t = 5;
          }
          this.g.lineStyle(t, l, 1);
          this.g.moveTo(this.relativeSourcePosition.x, this.relativeSourcePosition.y);
          this.g.lineTo(this.relativeSourcePosition.x + a.x, this.relativeSourcePosition.y + a.y);
        }
      }
    }
    this.show();
  };
  ConnectionMapObject.prototype.calculateRelativePositions = function () {
    this.relativeTargetPositions = [];
    var e = this._sourceAreaPos.subtract(this._originPos);
    if (this._connectionAreas != null) {
      for (var t = 0, i = this._connectionAreas; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = new c();
          o.x = n.absAreaPos.x;
          o.y = n.absAreaPos.y;
          var a = [this.calculateRelativePositionForArea(o, e, this.sourceAreaPos)];
          if (n.useSpecialConnectionLineColor) {
            a.push(n.specialConnectionLineColor);
          }
          this.relativeTargetPositions.push(a);
        }
      }
    }
    this.relativeSourcePosition = this.calculateRelativePositionForArea(this._sourceAreaPos, e, this.originPos);
  };
  ConnectionMapObject.prototype.calculateRelativePositionForArea = function (e, t, i) {
    var n = e.subtract(i);
    var o = new c(n.x + a.ClientConstCastle.WORLD_WIDTH, n.y);
    var s = new c(n.x - a.ClientConstCastle.WORLD_WIDTH, n.y);
    if (c.distance(t, o) < c.distance(t, n)) {
      n = o;
    }
    if (c.distance(t, s) < c.distance(t, n)) {
      n = s;
    }
    n.x *= a.ClientConstCastle.MAPTILESIZE_X;
    n.y *= a.ClientConstCastle.MAPTILESIZE_Y;
    return n;
  };
  Object.defineProperty(ConnectionMapObject.prototype, "originPos", {
    get: function () {
      return this._originPos;
    },
    set: function (e) {
      this._originPos = e;
    },
    enumerable: true,
    configurable: true
  });
  return ConnectionMapObject;
}(l.CastleSprite);
exports.ConnectionMapObject = u;
o.classImplementsInterfaces(u, "Container");