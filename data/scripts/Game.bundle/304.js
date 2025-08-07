Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = function (e) {
  function ACollectableItemResourceVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ACollectableItemResourceVE, e);
  ACollectableItemResourceVE.prototype.storageBarScale = function () {
    if (this.renderer.options.storage.fixedStorageMaximum > -1 && this.renderer.options.storage.fixedStorageMaximum !== undefined) {
      var e = this.renderer.options.storage.fixedStorageMaximum;
      return this.vo.amount / e;
    }
    if (a.CastleModel.areaData && a.CastleModel.areaData.activeArea && a.CastleModel.areaData.activeStorage) {
      e = a.CastleModel.areaData.activeStorage.getItem(this.vo.itemType).maxAmount;
      return this.vo.amount / e;
    }
    return 0;
  };
  return ACollectableItemResourceVE;
}(require("./1617.js").ACollectableItemGoodsVE);
exports.ACollectableItemResourceVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");