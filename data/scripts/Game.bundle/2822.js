Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function IsoHelperZSort() {}
  IsoHelperZSort.prototype.sortObjects = function (e, t) {
    if (e && t) {
      var i;
      for (var n = u.int(t.children.length), o = 0; o < n; ++o) {
        if (t.children[o] instanceof p.VEContainer) {
          i = t.children[o];
          this.sortObject(i.veRef, e, t);
        }
      }
      this.showChildIndices();
    }
  };
  IsoHelperZSort.prototype.sortObject = function (e, t, i) {
    var n = e.elementContainer;
    if (n && i.contains(n)) {
      t.fixed = true;
      var o = e.vo;
      var a = i.getChildIndex(n);
      var s = 0;
      for (var r = i.children.length - 1; r > -1; r--) {
        var l = i.children[r];
        if (l instanceof p.VEContainer) {
          var c = l.veRef;
          var u = c.vo;
          if ((o.x >= u.x && o.y >= u.y && o.x2 <= u.x2 && o.y2 <= u.y2 || u.x <= o.x2 && u.y <= o.y2 && (o.x > u.x2 || o.y > u.y2)) && e != c) {
            s = r > a ? r : r + 1;
            break;
          }
        }
      }
      s = Math.min(i.numChildren - 1, s);
      i.setChildIndex(n, s);
      t.fixed = false;
    }
    this.showChildIndices();
  };
  IsoHelperZSort.prototype.randomizeObjects = function (e, t) {
    var i;
    for (var n = u.int(e.length), o = 0; o < n; ++o) {
      i = e[o];
      var a = u.int(r.ClientConstUtils.getRandomInt(0, n - 1));
      t.setChildIndex(i.elementContainer, a);
    }
    this.showChildIndices();
  };
  IsoHelperZSort.prototype.showChildIndices = function () {
    if (a.Iso.renderer.settings.isZSortChildIndexVisible) {
      var e = a.Iso.renderer.layers.getIsoLayer(d.IsoLayerEnum.DEBUG_Z_SORT);
      var t = a.Iso.renderer.layers.getIsoLayer(d.IsoLayerEnum.ISO_OBJECTS);
      var i = new n();
      e.removeChildren();
      for (var o = 0, r = a.Iso.renderer.objects.isoLayerObjects; o < r.length; o++) {
        var p = r[o];
        if (p !== undefined) {
          var h = u.int(t.getChildIndex(p.elementContainer));
          var g = s.IsoHelper.view.calcPosToCoordinateSystem(i, p.elementContainer, e);
          var C = new l.TextField();
          C.textColor = 16711935;
          C.scaleX = C.scaleY = 4;
          C.autoSize = c.TextFieldAutoSize.CENTER;
          C.text = "" + h;
          C.x = g.x;
          C.y = g.y;
          C.mouseEnabled = false;
          e.addChild(C);
        }
      }
    }
  };
  return IsoHelperZSort;
}();
exports.IsoHelperZSort = o;
var a = require("./33.js");
var s = require("./46.js");
var r = require("./55.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./6.js");
var d = require("./113.js");
var p = require("./313.js");