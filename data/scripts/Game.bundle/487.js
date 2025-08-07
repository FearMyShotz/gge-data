Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./111.js");
var r = function (e) {
  function IsoCommandZSortObject(t) {
    var i = e.call(this) || this;
    i._isoObject = t;
    return i;
  }
  n.__extends(IsoCommandZSortObject, e);
  IsoCommandZSortObject.prototype.execute = function () {
    var e;
    if (this.isoObject) {
      if (a.instanceOfClass(this.isoObject, "AIsoObjectVE")) {
        e = this.isoObject;
      } else if (a.instanceOfClass(this.isoObject, "AIsoObjectVO")) {
        e = this.isoRenderer.objects.provider.getObjectByVO(this.isoObject);
      }
      if (e) {
        l.IsoHelper.zSort.sortObject(e, this.isoRenderer.objects.isoLayerObjects, this.isoRenderer.layers.getIsoLayer(s.IsoLayerEnum.ISO_OBJECTS));
      }
    }
  };
  Object.defineProperty(IsoCommandZSortObject.prototype, "isoObject", {
    get: function () {
      return this._isoObject;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandZSortObject;
}(require("./311.js").AIsoCommandView);
exports.IsoCommandZSortObject = r;
var l = require("./46.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");