Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./72.js");
var l = require("./8.js");
var c = createjs.Point;
var u = function (e) {
  function CircularItemDistributor(t) {
    var i = e.call(this) || this;
    i.itemContainer = t;
    o.MovieClipHelper.clearMovieClip(i.itemContainer);
    i.itemContainer.rotation = -90;
    return i;
  }
  n.__extends(CircularItemDistributor, e);
  CircularItemDistributor.prototype.init = function (e = null) {
    if (e != null) {
      this.properties = e;
    }
    if (this.properties != null) {
      this.createAndDistributeItems();
    }
  };
  CircularItemDistributor.prototype.highlightItems = function (e, t, i, n, o = false) {
    for (var a = s.int(this.items.length), r = 0, l = 0, c = 0; c < a; c++) {
      if (this.highlightItemByID(c, a, e, t)) {
        l = ++r * this.properties.animationDelay;
        if (o) {
          l = 0;
        }
        this.items[c].highlight(i, l);
        this.items[c].disp.toolTipText = n;
      }
    }
  };
  CircularItemDistributor.prototype.highlightItemByID = function (e, t, i, n) {
    if (n == 0) {
      return false;
    }
    var o = e / t * 100;
    return o >= i && o <= n;
  };
  CircularItemDistributor.prototype.createAndDistributeItems = function () {
    this.itemPositions = this.calculateItemPositions();
    this.createItems();
  };
  CircularItemDistributor.prototype.createItems = function () {
    var e;
    var t;
    var i = a.getDefinitionByName(this.properties.dispClassName);
    this.items = [];
    for (var n = 0; n < this.properties.amountItems; n++) {
      e = new this.properties.itemClass();
      t = new i();
      l.ButtonHelper.initBasicButton(t);
      t.basicButton.useHandCursor = false;
      e.disp = t;
      this.itemContainer.addChild(e.disp);
      e.x = this.itemPositions[n].x;
      e.y = this.itemPositions[n].y;
      this.items.push(e);
    }
  };
  CircularItemDistributor.prototype.calculateItemPositions = function () {
    return this.calculatePositionsOnCircle(this.properties.amountItems, this.properties.targetCircleRadius);
  };
  CircularItemDistributor.prototype.calculatePositionsOnCircle = function (e, t, i = false) {
    var n;
    var o = [];
    var a = 360 / e;
    var s = i ? a / 2 : 0;
    for (var r = 0; r < e; r++) {
      n = this.pointOnCircle(t, r * a + s, new c(0, 0));
      o.push(n);
    }
    return o;
  };
  CircularItemDistributor.prototype.pointOnCircle = function (e, t, i) {
    var n = t * Math.PI / 180;
    var o = e * Math.cos(n) + i.x;
    var a = e * Math.sin(n) + i.y;
    return new c(o, a);
  };
  CircularItemDistributor.prototype.drawDebug = function () {
    this.itemContainer.graphics.clear();
    this.drawDebugCircle();
    this.drawItemDummies();
  };
  CircularItemDistributor.prototype.drawItemDummies = function () {
    for (var e = 0; e < this.properties.amountItems; e++) {
      this.itemContainer.graphics.moveTo(0, 0);
      this.itemContainer.graphics.lineTo(this.itemPositions[e].x, this.itemPositions[e].y);
      this.itemContainer.graphics.beginFill(16711680, 0.5);
      this.itemContainer.graphics.drawCircle(this.itemPositions[e].x, this.itemPositions[e].y, 5);
      this.itemContainer.graphics.endFill();
    }
  };
  CircularItemDistributor.prototype.drawDebugCircle = function () {
    this.itemContainer.graphics.lineStyle(1, 0, 0.5);
    this.itemContainer.graphics.beginFill(65280, 0.5);
    this.itemContainer.graphics.drawCircle(0, 0, this.properties.targetCircleRadius);
    this.itemContainer.graphics.endFill();
  };
  return CircularItemDistributor;
}(r.CastleEventDispatcher);
exports.CircularItemDistributor = u;