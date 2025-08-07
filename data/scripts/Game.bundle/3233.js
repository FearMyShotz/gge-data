Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./24.js");
var s = require("./46.js");
var r = function (e) {
  function CollectableItemPlagueDoctorVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemPlagueDoctorVE, e);
  CollectableItemPlagueDoctorVE.prototype.iconCreate = function () {
    this.dispCreator.addClip(new a.CastleGoodgameExternalClip("Icon_PlaqueC2R", s.IsoHelper.view.getAssetFileURL("Icon_PlaqueC2R")));
  };
  return CollectableItemPlagueDoctorVE;
}(require("./158.js").ACollectableItemVE);
exports.CollectableItemPlagueDoctorVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");