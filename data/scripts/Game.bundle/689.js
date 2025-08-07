Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./113.js");
var s = function (e) {
  function IsoCommandZSortAll() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoCommandZSortAll, e);
  IsoCommandZSortAll.prototype.execute = function () {
    r.IsoHelper.zSort.sortObjects(this.isoRenderer.objects.isoLayerObjects, this.isoRenderer.layers.getIsoLayer(a.IsoLayerEnum.ISO_OBJECTS));
  };
  return IsoCommandZSortAll;
}(require("./311.js").AIsoCommandView);
exports.IsoCommandZSortAll = s;
var r = require("./46.js");
o.classImplementsInterfaces(s, "ICollectableRendererList");