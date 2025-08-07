Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./193.js");
var a = function () {
  function ClipLayerInfo(e = null) {
    if (e) {
      this.parseLayer(e);
    }
  }
  Object.defineProperty(ClipLayerInfo.prototype, "layer", {
    get: function () {
      return this._layer;
    },
    set: function (e) {
      this._layer = e;
    },
    enumerable: true,
    configurable: true
  });
  ClipLayerInfo.prototype.parseLayer = function (e) {
    var t;
    var n;
    var a;
    this._layer = [];
    var s = 0;
    for (var r = 0; r < e.numChildren; r++) {
      if (t = e.getChildAt(r)) {
        var o = t.name;
        if (t.numChildren > 0) {
          for (var l = 0; l < t.numChildren; l++) {
            if (n = t.getChildAt(l)) {
              a = new i.LayerInfo(n.x, n.y, n.scaleX, s, o, n.rotation);
              this._layer.push(a);
              s++;
            }
          }
        } else {
          a = new i.LayerInfo(t.x, t.y, t.scaleX, s, o, t.rotation);
          this._layer.push(a);
          s++;
        }
      }
    }
  };
  ClipLayerInfo.prototype.getLayerByName = function (e) {
    var t = [];
    for (var n = 0, i = this._layer; n < i.length; n++) {
      var a = i[n];
      if (a.layerName == e) {
        t.push(a);
      }
    }
    return t;
  };
  return ClipLayerInfo;
}();
exports.ClipLayerInfo = a;