Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./71.js");
var s = function (e) {
  function AreaDataSlum() {
    var t = this;
    t._slumLevel = -1;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AreaDataSlum, e);
  AreaDataSlum.prototype.parseCSL = function (e) {
    this.setSlumLevel(e.SL);
  };
  AreaDataSlum.prototype.setSlumLevel = function (e) {
    if (this._slumLevel != e) {
      this._slumLevel = e;
      if (this.areaData.isoData) {
        this.areaData.isoData.updater.updateSlumBuildings();
      }
      r.CastleComponent.controller.dispatchEvent(new a.AreaDataEvent(a.AreaDataEvent.ON_SLUM_LEVEL_CHANGED));
    }
  };
  Object.defineProperty(AreaDataSlum.prototype, "slumLevel", {
    get: function () {
      return this._slumLevel;
    },
    enumerable: true,
    configurable: true
  });
  return AreaDataSlum;
}(require("./562.js").AAreaDataComponent);
exports.AreaDataSlum = s;
var r = require("./14.js");
o.classImplementsInterfaces(s, "ICollectableRendererList", "IAreaDataComponent");