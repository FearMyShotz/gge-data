Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./111.js");
var s = function (e) {
  function AIsoFloorMarkVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AIsoFloorMarkVE, e);
  AIsoFloorMarkVE.prototype.getVELayerType = function () {
    return a.IsoLayerEnum.INTERACTION;
  };
  return AIsoFloorMarkVE;
}(require("./313.js").AIsoObjectVE);
exports.AIsoFloorMarkVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");