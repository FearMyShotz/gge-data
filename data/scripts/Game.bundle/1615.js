Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./145.js");
var s = function (e) {
  function ATreasurechestSurroundingsVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ATreasurechestSurroundingsVE, e);
  ATreasurechestSurroundingsVE.prototype.createAdditionalClips = function () {
    e.prototype.createAdditionalClips.call(this);
    this.additionalClips.addClips(a.IsoAdditionalClipEnum.EXCLAMATION_MARK);
  };
  Object.defineProperty(ATreasurechestSurroundingsVE.prototype, "treasureChestBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return ATreasurechestSurroundingsVE;
}(require("./194.js").ASurroundingBuildingVE);
exports.ATreasurechestSurroundingsVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");