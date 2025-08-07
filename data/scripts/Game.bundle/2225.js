Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./55.js");
var o = require("./24.js");
var a = function () {
  function RelicEquipmentInfoElement(e, t) {
    this._partType = e;
    this._category = t;
    this._clip = new o.CastleGoodgameExternalClip(r.RelicEquipmentInfoComponent.ASSET_NAME + "_" + n.ClientConstUtils.capitalizeFirstLetter(e.name), s.IsoHelper.view.getAssetFileURL(r.RelicEquipmentInfoComponent.ASSET_NAME + "_2_0"), null, 0, false);
  }
  Object.defineProperty(RelicEquipmentInfoElement.prototype, "clip", {
    get: function () {
      return this._clip;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentInfoElement.prototype, "partType", {
    get: function () {
      return this._partType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentInfoElement.prototype, "category", {
    get: function () {
      return this._category;
    },
    enumerable: true,
    configurable: true
  });
  return RelicEquipmentInfoElement;
}();
exports.RelicEquipmentInfoElement = a;
var s = require("./46.js");
var r = require("./592.js");