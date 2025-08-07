Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleBuildingInfoDialogProperties(t) {
    var i = e.call(this) || this;
    i._buildingVO = t;
    return i;
  }
  n.__extends(CastleBuildingInfoDialogProperties, e);
  Object.defineProperty(CastleBuildingInfoDialogProperties.prototype, "buildingVO", {
    get: function () {
      return this._buildingVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleBuildingInfoDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleBuildingInfoDialogProperties = o;